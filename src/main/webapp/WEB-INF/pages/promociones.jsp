<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
	<head>
		
		<script  src="https://code.jquery.com/jquery-3.3.1.min.js" 
			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	 			crossorigin="anonymous"></script>
	 	
	 	<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
		<spring:url value="/resources/js/firebaseconfig.js" var="firebase" />
		<spring:url value="/resources/js/promotion.js" var="promotion" />
		<script src="${firebase}"></script>
	 	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
	 	
	 	<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
	 	<script src="${promotion}"></script>

	 	<script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
	 	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
	 	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
	 	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	 	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
	 	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
	 	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
	 	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>	  			
	 	
	 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	 	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	 	<link href="https://fonts.googleapis.com/css?family=Francois+One|Vollkorn" rel="stylesheet">
	 
	 	<spring:url value="/resources/css/genericStyles.css" var="genericCss" />
		<link rel="stylesheet" href="${genericCss}">
	</head>
	
	<body>
		<div class="display-flex height100 ">
			<div class="left flex2 background-light-blue">
				<div class="title black-text center margin-10">Mercadeo</div>
				<div>
					<p class="secondText display-flex columnFlex">
					  <a  class="center" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
						Ventas
					  </a>
					</p>
					<div class="collapse" id="collapseExample">
					  	<ul class="list-group">
						  <li class="list-group-item"><a href="/mercadeo">Visualizacion general</a></li>
						  <li class="list-group-item"><a href="productos">Productos</a></li>
						  <li class="list-group-item"><a href="promociones">Promociones</a></li>
						</ul>
					</div>
				</div>
			 </div>
			 <div class="overflow rigth flex8 background-light-gray padding-25 style-3">
			 	<div class="display-flex">
					<div>
						<div class="subtitle">Visualización de productos</div>
					</div>
				</div>
				<div class="margin-top-10 display-flex">
					
					<div class="box flex1 margin-left-10">
						<table id="dataTableDelivery">
					        <thead>
					            <tr>
					                <th>Fecha de inicio</th>
					                <th>Fecha de Fin</th>
					                <th>Nombre</th>
					                <th>Precio</th>
					                <th>Producto</th>
					            </tr>
					        </thead>
						</table>
					</div>
					
				</div>
				<button id="delete">Eliminar</button>
				<div>
					<div class="display-flex">
						<div>
							<div class="subtitle">Agregar nueva promoción</div>
						</div>
					</div>
					
					<div class="display-flex columnFlex">
						<form id="formId">
							<div class="display-flex margin-bottom">
								<label class="center ">Nombre de promocion:</label>
								<input id="name" name="name" class="margin-left-10 form" type="text">
								<label class="center margin-left-10">Producto:</label>
								<select id="product" name="product" class="margin-left-10 form">
								  <option value="Hamburguesas">Hamburguesas</option>
								  <option value="Gaseosas">Gaseosas</option>
								  <option value="Papas">Papas</option>
								  <option value="Perro">Perro</option>
								</select>
								<label class="center margin-left-10">Precio:</label>
								<input name="price" class="margin-left-10 form" type="text">
							</div>
							<div class="display-flex margin-bottom">
								<label class="center form">Fecha de inicio:</label>
								<input id="dateInit" name="dateInit" type="date" class="margin-left-10 form">
								<label class="center margin-left-10">Fecha de fin:</label>
								<input id="date" name="dateFinish" type="date" class="margin-left-10 form">
							</div>
							<input id="save" type="submit" value="Guardar promoción" />
						</form>
					</div>
				</div>
			 </div>
		</div>
	</body>
</html>