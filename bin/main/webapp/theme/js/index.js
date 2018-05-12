var index = {};

(function() {

	index.initializer = function(){
		index.initGraphs();
	}
	
	index.initGraphs = function(){
		index.drawGraphSales();
		index.drawGraphPerformance();
		index.initDataTable();
		index.drawPerformanceDes();
	}
	
	index.drawGraphSales = function(){
		var chart = new CanvasJS.Chart("salesChartContainer", {
			animationEnabled: true,
			
			title:{
				text:"Ventas de productos"
			},
			axisX:{
				interval: 1
			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)",
				title: "Número de ventas"
			},
			data: [{
				type: "bar",
				name: "Ventas",
				axisYType: "secondary",
				color: "#014D65",
				dataPoints: [
					{ y: 3, label: "Sweden" },
					{ y: 7, label: "Taiwan" },
					{ y: 5, label: "Russia" },
					{ y: 9, label: "Spain" },
					{ y: 7, label: "Brazil" },
					{ y: 7, label: "India" },
					{ y: 9, label: "Italy" },
					{ y: 8, label: "Australia" },
					{ y: 11, label: "Canada" },
					{ y: 15, label: "South Korea" },
					{ y: 12, label: "Netherlands" },
					{ y: 15, label: "Switzerland" },
					{ y: 25, label: "Britain" },
					{ y: 28, label: "Germany" },
					{ y: 29, label: "France" },
					{ y: 52, label: "Japan" },
					{ y: 103, label: "China" },
					{ y: 134, label: "US" }
				]
			}]
		});
		chart.render();
	}
	
	index.drawGraphPerformance = function(){
		var chart = new CanvasJS.Chart("performanceChartContainer", {
			animationEnabled: true,
			title:{
				text: "Composition of Internet Traffic in North America"
			},
			axisX: {
				interval: 1,
				intervalType: "year",
				valueFormatString: "YYYY"
			},
			axisY: {
				suffix: "%"
			},
			toolTip: {
				shared: true
			},
			legend: {
				reversed: true,
				verticalAlign: "center",
				horizontalAlign: "right"
			},
			data: [{
				type: "stackedColumn100",
				name: "Real-Time",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 40 },
					{ x: new Date(2011,0), y: 50 },
					{ x: new Date(2012,0), y: 60 },
					{ x: new Date(2013,0), y: 61 },
					{ x: new Date(2014,0), y: 63 },
					{ x: new Date(2015,0), y: 65 },
					{ x: new Date(2016,0), y: 67 }
				]
			}, 
			{
				type: "stackedColumn100",
				name: "Web Browsing",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 28 },
					{ x: new Date(2011,0), y: 18 },
					{ x: new Date(2012,0), y: 12 },
					{ x: new Date(2013,0), y: 10 },
					{ x: new Date(2014,0), y: 10 },
					{ x: new Date(2015,0), y: 7 },
					{ x: new Date(2016,0), y: 5 }
				]
			}, 
			{
				type: "stackedColumn100",
				name: "File Sharing",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 15 },
					{ x: new Date(2011,0), y: 12 },
					{ x: new Date(2012,0), y: 10 },
					{ x: new Date(2013,0), y: 9 },
					{ x: new Date(2014,0), y: 7 },
					{ x: new Date(2015,0), y: 5 },
					{ x: new Date(2016,0), y: 1 }
				]
			},
			{
				type: "stackedColumn100",
				name: "Others",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 17 },
					{ x: new Date(2011,0), y: 20 },
					{ x: new Date(2012,0), y: 18 },
					{ x: new Date(2013,0), y: 20 },
					{ x: new Date(2014,0), y: 20 },
					{ x: new Date(2015,0), y: 23 },
					{ x: new Date(2016,0), y: 27 }
				]
			}]
		});
		chart.render();
	}
	
	index.initDataTable = function(){
		var data = [
		    [
		        "Tiger Nixon",
		        "System Architect",
		        "Edinburgh",
		        "5421",
		        "2011/04/25",
		        "$3,120"
		    ],
		    [
		        "Garrett Winters",
		        "Director",
		        "Edinburgh",
		        "8422",
		        "2011/07/25",
		        "$5,300"
		    ]
		]
		$('#dataTableDelivery').DataTable( {
		    data: data
		} );
	}
	
	index.drawPerformanceDes = function(){
		var chart = new CanvasJS.Chart("performanceChartContainerDelivery", {
			animationEnabled: true,
			title:{
				text: "Composition of Internet Traffic in North America"
			},
			axisX: {
				interval: 1,
				intervalType: "year",
				valueFormatString: "YYYY"
			},
			axisY: {
				suffix: "%"
			},
			toolTip: {
				shared: true
			},
			legend: {
				reversed: true,
				verticalAlign: "center",
				horizontalAlign: "right"
			},
			data: [{
				type: "stackedColumn100",
				name: "Real-Time",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 40 },
					{ x: new Date(2011,0), y: 50 },
					{ x: new Date(2012,0), y: 60 },
					{ x: new Date(2013,0), y: 61 },
					{ x: new Date(2014,0), y: 63 },
					{ x: new Date(2015,0), y: 65 },
					{ x: new Date(2016,0), y: 67 }
				]
			}, 
			{
				type: "stackedColumn100",
				name: "Web Browsing",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 28 },
					{ x: new Date(2011,0), y: 18 },
					{ x: new Date(2012,0), y: 12 },
					{ x: new Date(2013,0), y: 10 },
					{ x: new Date(2014,0), y: 10 },
					{ x: new Date(2015,0), y: 7 },
					{ x: new Date(2016,0), y: 5 }
				]
			}, 
			{
				type: "stackedColumn100",
				name: "File Sharing",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 15 },
					{ x: new Date(2011,0), y: 12 },
					{ x: new Date(2012,0), y: 10 },
					{ x: new Date(2013,0), y: 9 },
					{ x: new Date(2014,0), y: 7 },
					{ x: new Date(2015,0), y: 5 },
					{ x: new Date(2016,0), y: 1 }
				]
			},
			{
				type: "stackedColumn100",
				name: "Others",
				showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0\"%\"",
				dataPoints: [
					{ x: new Date(2010,0), y: 17 },
					{ x: new Date(2011,0), y: 20 },
					{ x: new Date(2012,0), y: 18 },
					{ x: new Date(2013,0), y: 20 },
					{ x: new Date(2014,0), y: 20 },
					{ x: new Date(2015,0), y: 23 },
					{ x: new Date(2016,0), y: 27 }
				]
			}]
		});
		chart.render();
	}
	
})();

$(function(){
	index.initializer();
});