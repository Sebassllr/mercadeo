var Product = {};

(function() {
	
	
	Product.initializer = function(){
		Product.getDataTables();
	}
	
	Product.getDataTables = function(){
		Firebase.getDataTable(Product.initTables);
	}
	
	Product.initTables = function(data){
		
		$('#dataTableDelivery').DataTable( {
	        dom: 'Bfrtip',
	        buttons: [
	            'copy', 'csv', 'excel', 'pdf', 'print'
	        ],
		    data: data
		});
	}
})();

$(function(){
	Product.initializer();
});