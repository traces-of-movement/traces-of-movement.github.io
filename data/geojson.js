var TFData = {
	title : "Hamed's journey",
	events : [
		{
			point : {
				lat : 35.696111, // Tehran
				lng : 51.423056
			},
			ts : formatDate("2015-9-26"),
			label : "Hamad leaves Tehran, Iran for Bazargan, Iran.",
			media : {
				type : "photo",
				url : "https://farm8.staticflickr.com/7121/7660894804_0370a64ceb_m_d.jpg"	// for example!
			},
			callback : null
		},
		{
			point : {
				lat : 39.391389, // Bazargan
				lng : 44.3875
			},
			ts : formatDate("2015-9-27"),
			label : "Crosses border to Gürbulak, Turkey",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.416417, // Gürbulak
				lng : 44.352583
			},
			ts : formatDate("2015-9-28"),
			label : "Bus to Istanbul, Turkey",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 41.013611, // Istanbul
				lng : 28.955000
			},
			ts : formatDate("2015-9-29"),
			label : "1 week stay in Istanbul, Turkey",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 41.013611, // Istanbul
				lng : 28.955000
			},
			ts : formatDate("2015-10-5T00"),
			label : "Van to Çanakkale, Turkey",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 40.155833, // Çanakkale
				lng : 26.413611
			},
			ts : formatDate("2015-10-5T12"),
			label : "Smuggler boat to Lesbos, Greece",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.166667, // Lesbos
				lng : 26.333333
			},
			ts : formatDate("2015-10-5T23"),
			label : "2 nights in Lesbos, Greece",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 39.166667, // Lesbos
				lng : 26.333333
			},
			ts : formatDate("2015-10-7T00"),
			label : "Ferry boat to Athens, Greece",
			media : {
				type : "info",
				info : [
					{
						text : "Cost: 35 Euro",
						icon : "/img/euro.png"
					}
				]
			},
			callback : null
		},
		{
			point : {
				lat : 37.966667, // Athens
				lng : 23.716667
			},
			ts : formatDate("2015-10-7T12"),
			label : "Bus to Idomeni, Greece",
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
				lat : 41.116667, // Indomeni
				lng : 22.516667
			},
			ts : formatDate("2015-10-7T23"),
			label : "Two days in Indomeni, waiting for the Macedonian border to open",
			media : {
				type : "",
				info : ""
			},
			callback : null
		},
		{
			point : {
				lat : 41.116667, // Indomeni
				lng : 22.516667
			},
			ts : formatDate("2015-10-9T00"),
			label : "Crosses border to Macedonia.",
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
				lat : 42.000000, // Skopje, not necessarily where Hamid was
				lng : 21.433333
			},
			ts : formatDate("2015-10-9T23"),
			label : "Two days in Fyrom (Macedonia).",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 42.000000, // Skopje, not necessarily where Hamid was
				lng : 21.433333
			},
			ts : formatDate("2015-10-11"),
			label : "Train to Vienna",
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
				lat : 48.200000, // Vienna
				lng : 16.366667
			},
			ts : formatDate("2015-10-11T23"),
			label : "3 days in Vienna, waiting for the border to open",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 48.200000, // Vienna
				lng : 16.366667
			},
			ts : formatDate("2015-10-14T00"),
			label : "Bus to German border",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 47.811195, // German/Austria Border
				lng : 12.900000
			},
			ts : formatDate("2015-10-14T23"),
			label : "4 days spent in a refugee reception centre",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 47.811195, // German/Austria Border
				lng : 12.900000
			},
			ts : formatDate("2015-10-19"),
			label : "Second refugee reception centre in a sport hall",
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
				lat : 47.811195, // German/Austria Border
				lng : 12.900000
			},
			ts : formatDate("2015-10-19"),
			label : "Bus to Munich, Germany",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 48.133333, // Munich
				lng : 11.566667
			},
			ts : formatDate("2015-10-19T23"),
			label : "6 days in Munich in a refugee centre",
			media : {
				type : "",
				url : ""
			},
			callback : null
		},
		{
			point : {
				lat : 48.133333, // Munich
				lng : 11.566667
			},
			ts : formatDate("2015-10-27T22"),
			label : "Train to Berlin",
			media : {
				type : "info",
				info : [
					{
						text : "Cost: 162 euro",
						icon : "/img/euro.png"
					}
				]
			},
			callback : null
		},
{
			point : {
				lat : 52.516667, // Berlin
				lng : 13.383333
			},
			ts : formatDate("2015-10-28T23"),
			label : "Taxi to a refugee camp at Wichertstraße strasse, Berlin",
			media : {
				type : "",
				url : ""
			},
			callback : null
		}
	]
};