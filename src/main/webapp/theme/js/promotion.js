var Promotion = {};
(function(){
	Promotion.initializer = function(){
		$('#save').click(Promotion.savePromotion);
		Promotion.getPromotions();
	}
	
	Promotion.initDataTable = function(data){
		var datatable = $('#dataTableDelivery').DataTable( {
	        dom: 'Bfrtip',
	        buttons: [
	            'copy', 'csv', 'excel', 'pdf', 'print'
	        ],
		    aaData: data
		});
	    $('#dataTableDelivery tbody').on( 'click', 'tr', function () {
	        if ( $(this).hasClass('selected') ) {
	            $(this).removeClass('selected');
	        }
	        else {
	        	datatable.$('tr.selected').removeClass('selected');
	            $(this).addClass('selected');
	        }
	    } );
	 
	    $('#delete').click( function () {
	    	Promotion.erasePromotion($('.selected').children()[3].innerText);
	    	datatable.row('.selected').remove().draw( false );
	    });
	}
	
	Promotion.getPromotions = function(){
		Firebase.getDataTablePromotion(Promotion.initDataTable);
	}
	
	Promotion.savePromotion = function(){
		var serial = $('#formId').serializeArray();
		Firebase.savePromotion(Promotion.getJsonPromotion(serial), "promotion");
	}
	
	Promotion.getJsonPromotion = function(formArray){
		var returnArray = {};
		for (var i = 0; i < formArray.length; i++){
			returnArray[formArray[i]['name']] = formArray[i]['value'];
		}
		return returnArray;
	}
	
	Promotion.erasePromotion = function(name){
		Firebase.eraseData(name);
	}
	
})();


$(function(){
	Promotion.initializer();
});