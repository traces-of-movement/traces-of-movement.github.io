var TFIcons = {
	origin : {
		iconUrl : "/img/test_icon.png"
	},
	destination : {
		iconUrl : "/img/test_icon.png"
	},
	tracker : {
		className : "tf_tracker_marker"
	}
};

var TFTemplate = Backbone.Model.extend({
	constructor : function() {
		Backbone.Model.apply(this, arguments);		
	},
	render : function() {
		var html = "<h2><%= label %></h2>";
		return _.template(html, this.toJSON());
	}
});