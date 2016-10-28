var TFData = {
	title : "Hamed's journey",
	events : [
		{
			point : {
				lat : 34.533333,
				lng : 69.166667
			},
			ts : formatDate("2015-9-27"),
			label : "Hamid leaves Kabul, Iran.",
			media : {
				type : "photo",
				url : "https://farm8.staticflickr.com/7121/7660894804_0370a64ceb_m_d.jpg"	// for example!
			}
		},
		{
			point : {
				lat : 35.696111,
				lng : 51.423056
			},
			ts : formatDate("2015-10-1"),
			label : "Arrives in Tehran, Iran.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.391389,
				lng : 44.3875
			},
			ts : formatDate("2015-10-3"),
			label : "Arrives in Bazargan, Iran.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.416417,
				lng : 44.352583
			},
			ts : formatDate("2015-10-5"),
			label : "Arrives in Gürbulak, Turkey.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 41.013611,
				lng : 28.955000
			},
			ts : formatDate("2015-10-7"),
			label : "Takes bus to Istanbul, Turkey.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 40.155833,
				lng : 26.413611
			},
			ts : formatDate("2015-10-9"),
			label : "Takes van to Çanakkale, Turkey.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.166667,
				lng : 26.333333
			},
			ts : formatDate("2015-10-11"),
			label : "Takes smuggler bus to Lesbos, Greece.",
			media : {
				type : "info",
				info : [
					{
						text : "Cost: 25 Euro",
						icon : "/img/euro.png"
					}
				]
			},
			callback : null
		},
		{
			point : {
				lat : 37.966667,
				lng : 23.716667
			},
			ts : formatDate("2015-10-13"),
			label : "Takes ferry boat to Athens, Greece.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 41.116667,
				lng : 22.516667
			},
			ts : formatDate("2015-10-15"),
			label : "Takes bus to Idomeni, Greece.",
			media : {
				type : "info",
				info : [
					{
						text : "Cost: 25 euro",
						icon : "/img/euro.png"
					}
				]
			},
			callback : null
		},
		{
			point : {
				lat : 42.000000, // GPS coordinates of Skopje, not necessarily where Hamid was
				lng : 21.433333
			},
			ts : formatDate("2015-10-17"),
			label : "Arrives in Fyrom (Macedonia).",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 48.200000,
				lng : 16.366667
			},
			ts : formatDate("2015-10-19"),
			label : "Arrives in Vienna, Austria.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		// TODO: need to plot path:
		// Crossing by train through Serbia, Hungary, into Austria (SEE ATTACHED MAP. Hamed follows a similar route, except he starts from Afghanistan), to german border
		{
			point : {
				lat : 48.133333,
				lng : 11.566667
			},
			ts : formatDate("2015-10-21"),
			label : "Arrives in Munich, Germany.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 52.516667,
				lng : 13.383333
			},
			ts : formatDate("2015-10-28"),
			label : "Arrives in Berlin, Germany.",
			media : {
				type : "",
				url : ""
			},
			callback : null
		}
	]
};