function setup_timeline() {
	var timelineData = new vis.DataSet([{
			start	: TFData.origin.date,
			end		: TFData.destination.date,
			content : TFData.title
		}
	]);

	var timelineOpts = {
		width		: "100%",
		height		: "120px",
		style		: "box",
		axisOnTop	: true
	};

	var timeline = new vis.Timeline($('#tf_timeline_holder')[0], timelineData, timelineOpts);
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
	map.setView(pointToArray(getGeoMidwayPoint(TFData.origin, TFData.destination)), mapZoom);
	return map;
}

function setup_player(map, timeline) {
	 var geoJson = null;	// load our GeoJSON
	 var onPlaybackTimeChange = function(ms) {};
	 var playerOpts = {
	 	playControl: true,
	 	dateControl: true
	 };

	 function onPlaybackTimeChange (ms) {
		 timeline.setCustomTime(new Date(ms));
	 };

	 var player = new L.Playback(map, geoJson, onPlaybackTimeChange, playerOpts);
	 return player;
}

$(document).ready(function() {
	var map = setup_map();
	var timeline = setup_timeline();
	var player = setup_player(map, timeline);
});
