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
		var html = $(document.createElement('div')).addClass("tf_tracker_content");
		html.append($(document.createElement('h2')).html(this.get('label')));

		if(this.has('media')) {
			var embed = [];
			var className = "tf_embed_" + this.get('media').type;
			
			switch(this.get('media').type) {
				case "photo":
					embed.push($(document.createElement('img')).attr({
						src : this.get('media').url
					}));

					break;
				case "video":
					break;
				case "statistic":
					break;
				case "info":
					var info = $(document.createElement('ul'));

					_.each(this.get('media').info, function(i) {
						var li = $(document.createElement('li'));
						
						if(i.icon) {
							li.append($(document.createElement('img')).addClass("tf_icon").attr('src', i.icon));
						}

						if(i.text) {
							li.append($(document.createElement('span')).html(i.text));
						}

						$(this).append(li);
					}, info);

					console.info($(info));
					embed.push(info);
					break;
				case "text":
					break;
			}

			if(!_.isEmpty(embed)) {
				html.append($(document.createElement('div')).addClass(className).addClass("tf_embed").append(embed));
			}
		}
		
		return html;
	}
});