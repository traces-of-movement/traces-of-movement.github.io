var map;
var timeline;
var player;

var TFIcons = {
	origin : {
		iconUrl : "/img/test_icon.png"
	},
	destination : {
		iconUrl : "/img/test_icon.png"
	},
	tracker : {
		className : "tf_tracker_marker",
		iconSize : [25, 25],
		iconUrl : "/img/test_icon.png"	
	}
};

function onPlaybackTimeChange(ms) {
    timeline.setCustomTime(new Date(ms));
};

function onCustomTimeChange(properties) {
    if (!playback.isPlaying()) {
        playback.setCursor(properties.time.getTime());
    }        
}

function onMarkerClicked() {
	console.info(this);
	console.info(arguments);
}

$(function() {
    var tickLen = 3;    // 3 hours?
    var mapZoom = 4;

    var timelineData = new vis.DataSet([{
        start: _.first(TFData.events).ts,
        end: _.last(TFData.events).ts,
        content: TFData.title 
    }]);

    var timelineOptions = {
      "width":  "100%",
      "height": "120px",
      "style": "box",
      "axisOnTop": true,
      "showCustomTime":true
    };
    
    timeline = new vis.Timeline(document.getElementById('tf_timeline_holder'), timelineData, timelineOptions);        
    timeline.setCustomTime(_.first(TFData.events).ts);

    // Setup leaflet map
    map = new L.Map('tf_map_holder');

    var basemapLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoiam9yZGFuYnMiLCJhIjoiY2l1c2RjcG85MDAyczJ0cGZhcjZtcWEybCJ9.rUN_nJR6NJMyBOmHwAGnOw'
    });

    map.setView(pointToArray(getGeoMidwayPoint(_.first(TFData.events).point, _.last(TFData.events).point)), mapZoom);
    map.addLayer(basemapLayer);

    var playbackOptions = {
        tickLen : tickLen * (60 * 60 * 1000),
        playControl: true,
        dateControl: true,
        tracksLayer : false,
        popups : true,
        marker : function() {
        	return {
        		icon : L.icon(TFIcons.tracker)
        	}
		}
    };
        
    playback = new L.Playback(map, parseGeoJSON(), onPlaybackTimeChange, playbackOptions);    
    timeline.on('timechange', onCustomTimeChange);    
});