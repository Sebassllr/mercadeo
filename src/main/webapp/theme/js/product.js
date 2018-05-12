var Product = {};

(function() {
	
	
	Product.initializer = function(){
		Product.initTables();
		
	}
	
	Product.initTables = function(){
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
		});
	}
})();

$(function(){
	Product.initializer();
});