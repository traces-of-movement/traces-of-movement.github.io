function setup_timeline() {
	var startTime	= new Date(2015,  9, 27);
	var endTime		= new Date(2015, 10, 28);
	var timelineWidth = '100%';

	var timelineData = new vis.DataSet([{
			start	: startTime,
			end		: endTime
		}
	]);

	var timelineOpts = {
		width		: timelineWidth,
		style		: "box",
		axisOnTop	: true
	};

	var timeline = new vis.Timeline($('#tf_timeline_holder')[0], timelineData, timelineOpts);
	return timeline;
}

function setup_map() {
	var map = new L.map('tf_map_holder');
	var tileLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoiam9yZGFuYnMiLCJhIjoiY2l1c2RjcG85MDAyczJ0cGZhcjZtcWEybCJ9.rUN_nJR6NJMyBOmHwAGnOw'
	}).addTo(map);	

	var mapCenter = [34.533333, 69.166667]; // kabul
	var mapZoom = 10;	// initial zoom

	map.setView(mapCenter, mapZoom);
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
