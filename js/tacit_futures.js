(function($){
	/*
	 * init timeline
	 */

	var startTime = 0;	// sept 2015
	var endTime = 0;	// nov 2015
	var timelineLabel = "timeline label";	// not sure if we need this.
	var timelineWidth = "100%";
	var timelineHeight = "120px";

	var timelineData = new vis.DataSet([
		{
			start : startTime,
			end : endTime,
			content : timelineLabel
		}
	]);

	var timelineOpts = {
		width : timelineWidth,
		height : timelineHeight,
		style : "box",
		axisOnTop : true,
		showCustomTime : true
	};

	var timeline = new vis.Timeline($('tf_timeline_holder'), timelineData, timelineOpts);

	timeline.setCustomTime(startTime);

	/*
	 * init map
	 */

	var tileLayer = "";	// url of tile layer
	var mapCenter = [];	// lat-lng of map center
	var mapZoom = 10;	// initial zoom

	var map = new L.Map('tf_map_holder');
	var  = new L.TileLayer();

	map.setView(mapCenter, mapZoom);
	map.addLayer(new L.TileLayer(tileLayer));

	/*
	 * init player
	 */

	 var geoJson = null;	// load our GeoJSON
	 var onPlaybackTimeChange = function(ms) {};
	 var playerOpts = {
	 	playControl: true,
	 	dateControl: true
	 };

	 var player = new L.Playback(map, geoJson, onPlaybackTimeChange, playerOpts);

})(jQuery);