var index = {};

(function() {

	index.initializer = function(){
		index.initGraphs();
	}
	
	index.initGraphs = function(){
		index.drawGraphSales(index.drawGraph);
		index.drawGraphPerformance();
		index.drawPerformanceDes();
		$('#graphSelection').on('change', index.onChange);
		index.hideGraphs();
	}
	
	index.hideGraphs = function(){
		$('#2').hide();
		$('#3').hide();
	}
	
	index.onChange = function(){
		var value = this.value;
		for (var i = 1; i <= 3; i++) {
			if(value == i){
				$('#' + i).show();
			}else{
				$('#' + i).hide();
			}
		}
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
					text: "Tiempo de asignacion"
				},
				axisY2:{
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
					name: "Debajo del promedio",
					axisYType: "secondary",
					color: "#7E8F74",
					dataPoints: [
						{ y: 1, label: "Buenos aires" },
						{ y: 6, label: "Milagrosa" },
						{ y: 6, label: "Villa hermosa" },
						{ y: 2, label: "Boston" },
						{ y: 3, label: "San diego" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "En promedio",
					axisYType: "secondary",
					color: "#F0D6A7",
					dataPoints: [
						{ y: 2, label: "Buenos aires" },
						{ y: 6, label: "Milagrosa" },
						{ y: 8, label: "Villa hermosa" },
						{ y: 2, label: "Boston" },
						{ y: 5, label: "San diego" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "Por encima de promedio",
					axisYType: "secondary",
					color:"#DB9079",
					indexLabel: "#total",
					dataPoints: [
						{ y: 4, label: "Buenos aires" },
						{ y: 5, label: "Milagrosa" },
						{ y: 6, label: "Villa hermosa"},
						{ y: 7, label: "Boston" },
						{ y: 4, label: "San diego" }
					]
				}
				]
			};
		$("#performanceChartContainer").CanvasJSChart(options);
	}
	
	index.drawPerformanceDes = function(){
		var options = {
				animationEnabled: true,
				theme: "light2",
				title:{
					text: "Tiempo de entrega en zonas"
				},
				axisY2:{
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
					name: "Debajo del promedio",
					axisYType: "secondary",
					color: "#7E8F74",
					dataPoints: [
						{ y: 3, label: "Buenos aires" },
						{ y: 5, label: "Milagrosa" },
						{ y: 3, label: "Villa hermosa" },
						{ y: 6, label: "Boston" },
						{ y: 7, label: "San diego" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "En promedio",
					axisYType: "secondary",
					color: "#F0D6A7",
					dataPoints: [
						{ y: .5, label: "Buenos aires" },
						{ y: 1.5, label: "Milagrosa" },
						{ y: 1, label: "Villa hermosa" },
						{ y: 2, label: "Boston" },
						{ y: 2, label: "San diego" }
					]
				},
				{
					type: "stackedBar",
					showInLegend: true,
					name: "Por encima de promedio",
					axisYType: "secondary",
					color:"#DB9079",
					indexLabel: "#total",
					dataPoints: [
						{ y: 2, label: "Buenos aires" },
						{ y: 3, label: "Milagrosa" },
						{ y: 6, label: "Villa hermosa"},
						{ y: 4, label: "Boston" },
						{ y: 4, label: "San diego" }
					]
				}
				]
			};
		$("#performanceChartContainerDelivery").CanvasJSChart(options);
	}
	
})();

$(function(){
	index.initializer();
});