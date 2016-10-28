if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * (Math.PI / 180);
  }

  Number.prototype.toDegrees = function() {
  	return this * (180 / Math.PI);
  }
}

function formatDate(d) {
	return moment(d, "YYYY-MM-DDTHH");
}

function pointToArray(p) {
	return [p.lat, p.lng];
}

function getGeoMidwayPoint(a, b) {
	a.latRad = a.lat.toRad();
	a.lngRad = a.lng.toRad();
	b.latRad = b.lat.toRad();

	var d = (b.lng - a.lng).toRad();
	var x = Math.cos(b.latRad) * Math.cos(d);
	var y = Math.cos(b.latRad) * Math.sin(d);

	var c = {
		latRad : Math.atan2(Math.sin(a.latRad) + Math.sin(b.latRad), Math.sqrt((Math.cos(a.latRad) + x) * (Math.cos(a.latRad) + x) + y * y)),
		lngRad : a.lngRad + Math.atan2(y, Math.cos(a.latRad) + x)
	};

	return {
		lat : c.latRad.toDegrees(),
		lng : c.lngRad.toDegrees()
	};
}

function getEventFromTimestamp(ms) {
	// finds the event from timestamp.
	// needs a bit of love!
	
	var match = -1;
	var nearestValue = 0;

	_.each(TFData.events, function(e, i) {
		var oldDiff = Math.abs(nearestValue - ms);
		var newDiff = Math.abs(ms - e.ts);
		
		if(newDiff < oldDiff && e.ts < ms) {
			match = i;
			nearestValue = e.ts;
		}
	});

	return match >= 0 ? TFData.events[match] : null;
}

function parseGeoJSON() {
	/*
	
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "MultiPoint",
	    "coordinates": [array of [lng,lat] coordinates]
	  },
	  "properties": {
	    "time": [array of UNIX timestamps]
	  }
	}

	*/
	
	return {
		type : "Feature",
		geometry : {
			type : "MultiPoint",
			coordinates : _.map(TFData.events, function(e) {
				return [e.point.lng, e.point.lat];	// ha ha, GeoJSON does lng first for some reason.
			})
		},
		properties : {
			time : _.map(_.pluck(TFData.events, "ts"), function(ts) {
				return ts.valueOf();
			})
		}
	};
}