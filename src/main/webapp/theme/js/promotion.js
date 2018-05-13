var Promotion = {};
(function(){
	Promotion.initializer = function(){
		$('#save').click(Promotion.savePromotion);
		Promotion.getPromotions();
	}
	
	Promotion.initDataTable = function(data){
		$('#dataTableDelivery').DataTable( {
	        dom: 'Bfrtip',
	        buttons: [
	            'copy', 'csv', 'excel', 'pdf', 'print'
	        ],
		    data: data
		});
	}
	
	Promotion.getPromotions = function(){
		Firebase.getDataTablePromotion(Promotion.initDataTable);
	}
	
	Promotion.savePromotion = function(){
		var input = $('.form');
		var promotion = [];
		input.each(function(){
			promotion.push($(this).val());
		});
		Firebase.updateData(promotion, "promotion");
	}
	
})();


$(function(){
	Promotion.initializer();
});