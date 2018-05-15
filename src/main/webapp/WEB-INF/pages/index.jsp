<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
	<head>
		
		<spring:url value="/resources/css/genericStyles.css" var="genericCss" />
		<spring:url value="/resources/css/index.css" var="indexStyles" />
		<spring:url value="/resources/js/index.js" var="index" />
		
		<script  src="https://code.jquery.com/jquery-3.3.1.min.js" 
			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  			crossorigin="anonymous"></script>
  		
  		<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
		<spring:url value="/resources/js/firebaseconfig.js" var="firebase" />
		<script src="${firebase}"></script>
  			
  		<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
  		<script type="text/javascript" src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
  		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
  
		<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  		
  		
		<link rel="stylesheet" href="${genericCss}">
		<link rel="stylesheet" href="${indexStyles}">
		<link href="https://fonts.googleapis.com/css?family=Francois+One|Vollkorn" rel="stylesheet">
		<script src="${index}"></script>
		

		
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
						<div class="subtitle">Bienvenido al módulo de mercadeo</div>
						<div class="secondText">Este es su tablero</div>
					</div>
				</div>
				<select id="graphSelection" name="product" class="margin-left-10 form">
				  <option value="1">Ventas</option>
				  <option value="2">Tiempo de asignación</option>
				  <option value="3">Tiempos de entrega</option>
				</select>
				<div class="margin-top-10 display-flex columnFlex">
					<div id="1" class="box">
						<div id="salesChartContainer" class="chartBox"></div>
					</div>
					<div id="2" class="box">
						<div id="performanceChartContainer" class="chartBox"></div>
					</div>
					<div id="3" class="box">
						<div id="performanceChartContainerDelivery" class="chartBox"></div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>