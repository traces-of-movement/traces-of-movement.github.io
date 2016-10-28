var map;
var timeline;
var player;

function onPlaybackTimeChange(ms) {
	var evt = getEventFromTimestamp(ms);
	
	if(evt) {
		var panel = new TFTemplate(evt);
		$("div.tf_tracker_marker").html(panel.render());
	}

    timeline.setCustomTime(new Date(ms));
};

function onCustomTimeChange(properties) {
    if (!playback.isPlaying()) {
        playback.setCursor(properties.time.getTime());
    }   
}

$(function() {
    var tickLen = 3;    // 3 hours?
	var playSpeed = 1.0; // ticks per second
    var mapZoom = 4;

    var mapOptions = {
        attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
        maxZoom: mapZoom,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoiam9yZGFuYnMiLCJhIjoiY2l1c2RjcG85MDAyczJ0cGZhcjZtcWEybCJ9.rUN_nJR6NJMyBOmHwAGnOw'
    };

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

    var basemapLayer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', mapOptions);

    map.setView(pointToArray(getGeoMidwayPoint(_.first(TFData.events).point, _.last(TFData.events).point)), mapZoom);
    map.addLayer(basemapLayer);
    
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    $(".leaflet-control-zoom").css("visibility", "hidden");

	var polyline = L.polyline(_.pluck(TFData.events, 'point'), {color: 'blue'});
	polyline.addTo(map);

    var playbackOptions = {
        tickLen : tickLen * (60 * 60 * 1000),
		speed : playSpeed * 60.0 * 1000.0,
		maxInterpolationTime : 100 * 24 * 60 * 60 * 1000.0,
        playControl: true,
        dateControl: false,
        tracksLayer : false,
        popups : true,
        marker : function() {
        	return {
        		icon : L.divIcon(TFIcons.tracker)
        	}
		}
    };
        
    playback = new L.Playback(map, parseGeoJSON(), onPlaybackTimeChange, playbackOptions);    
    timeline.on('timechange', onCustomTimeChange);    
});