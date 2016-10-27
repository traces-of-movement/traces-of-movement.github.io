var map;
var timeline;
var player;

function onPlaybackTimeChanged(ms) {
	timeline.setCustomTime(new Date(ms));
}

function onCustomTimeChanged(data) {
	
}

function setup_timeline() {
	var timelineData = new vis.DataSet([{
			start	: _.first(TFData.events).ts,
			end		: _.last(TFData.events).ts,
			content : TFData.title,
			id: 1
		}
	]);

	var timelineOpts = {
		width		: "100%",
		height		: "120px"
	};

	var timeline = new vis.Timeline(document.getElementById("tf_timeline_holder"), timelineData, timelineOpts);
	timeline.on('timechange', onCustomTimeChanged);
	timeline.setCustomTime(_.first(TFData.events).ts.valueOf());

	return timeline;
}

function setup_map() {
	var map = new L.map('tf_map_holder');
	var tileLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoiam9yZGFuYnMiLCJhIjoiY2l1c2RjcG85MDAyczJ0cGZhcjZtcWEybCJ9.rUN_nJR6NJMyBOmHwAGnOw'
	}).addTo(map);	

	var mapZoom = 4;	// initial zoom
	map.setView(pointToArray(getGeoMidwayPoint(_.first(TFData.events).point, _.last(TFData.events).point)), mapZoom);
	return map;
}

function setup_player() {
	 var geoJson = null;	// load our GeoJSON
	 var playerOpts = {
	 	playControl: true,
	 	dateControl: true
	 };

	return new L.Playback(map, geoJson, onPlaybackTimeChanged, playerOpts);
}

$(document).ready(function() {
	map = setup_map();
	timeline = setup_timeline();
	player = setup_player();
});
