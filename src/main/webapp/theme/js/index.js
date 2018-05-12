var index = {};

(function() {

	index.initializer = function(){
		index.initGraphs();
	}
	
	index.initGraphs = function(){
		index.drawGraphSales(index.drawGraph);
		index.drawGraphPerformance();
		index.drawPerformanceDes();
	}
	
	index.drawGraphSales = function(next){
		var data = Firebase.returnPedido(next);
	}
	
	index.drawGraph = function(data){
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
				dataPoints: data
			}]
		});
		chart.render();
	}
	
	index.drawGraphPerformance = function(){
		var options = {
				animationEnabled: true,
				theme: "light2",
				title:{
					text: "Cost Of Pancake Ingredients"
				},
				axisY2:{
					prefix: "$",
					lineThickness: 0				
				},
				toolTip: {
					shared: true
				},
				legend:{
					verticalAlign: "top",
					horizontalAlign: "center"
				},
				data: [
				{     
					type: "stackedBar",
					showInLegend: true,
					name: "Butter (500gms)",
					axisYType: "secondary",
					color: "#7E8F74",
					dataPoints: [
						{ y: 3, label: "India" },
						{ y: 5, label: "US" },
						{ y: 3, label: "Germany" },
						{ y: 6, label: "Brazil" },
						{ y: 7, label: "China" },
						{ y: 5, label: "Australia" },
						{ y: 5, label: "France" },
						{ y: 7, label: "Italy" },
						{ y: 9, label: "Singapore" },
						{ y: 8, label: "Switzerland" },
						{ y: 12, label: "Japan" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "Flour (1kg)",
					axisYType: "secondary",
					color: "#F0D6A7",
					dataPoints: [
						{ y: .5, label: "India" },
						{ y: 1.5, label: "US" },
						{ y: 1, label: "Germany" },
						{ y: 2, label: "Brazil" },
						{ y: 2, label: "China" },
						{ y: 2.5, label: "Australia" },
						{ y: 1.5, label: "France" },
						{ y: 1, label: "Italy" },
						{ y: 2, label: "Singapore" },
						{ y: 2, label: "Switzerland" },
						{ y: 3, label: "Japan" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "Milk (2l)",
					axisYType: "secondary",
					color: "#EBB88A",
					dataPoints: [
						{ y: 2, label: "India" },
						{ y: 3, label: "US" },
						{ y: 3, label: "Germany" },
						{ y: 3, label: "Brazil" },
						{ y: 4, label: "China" },
						{ y: 3, label: "Australia" },
						{ y: 4.5, label: "France" },
						{ y: 4.5, label: "Italy" },
						{ y: 6, label: "Singapore" },
						{ y: 3, label: "Switzerland" },
						{ y: 6, label: "Japan" }
						]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "Eggs (20)",
					axisYType: "secondary",
					color:"#DB9079",
					indexLabel: "$#total",
					dataPoints: [
						{ y: 2, label: "India" },
						{ y: 3, label: "US" },
						{ y: 6, label: "Germany"},
						{ y: 4, label: "Brazil" },
						{ y: 4, label: "China" },
						{ y: 8, label: "Australia" },
						{ y: 8, label: "France" },
						{ y: 8, label: "Italy" },
						{ y: 4, label: "Singapore" },
						{ y: 11, label: "Switzerland" },
						{ y: 6, label: "Japan" }
					]
				}
				]
			};
		$("#performanceChartContainer").CanvasJSChart(options);
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