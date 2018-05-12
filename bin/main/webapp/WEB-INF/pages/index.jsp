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
  			
  		<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
  		
  		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
  
		<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
  		
		<link rel="stylesheet" href="${genericCss}">
		<link rel="stylesheet" href="${indexStyles}">
		<link href="https://fonts.googleapis.com/css?family=Francois+One|Vollkorn" rel="stylesheet">
		<script src="${index}"></script>
	</head>
	<body>
		<div class="display-flex height100 ">
			<div class="left flex2 background-light-blue">
				<div class="title black-text center margin-10">Mercadeo</div>
			 </div>
			<div class=" overflow rigth flex8 background-light-gray padding-25 style-3">
				<div class="display-flex">
					<div>
						<div class="subtitle">Bienvenido al módulo de mercadeo</div>
						<div class="secondText">Este es su tablero</div>
					</div>			
					<div class="display-flex center flexEnd">
						<button>Actualizar</button>
					</div>
				</div>
				
				
				<div class="margin-top-10 display-flex">
					<div class="box flex1">
						<div id="salesChartContainer" class="chartBox"></div>
					</div>
					<div class="box flex1 margin-left-10">
						<table id="dataTableDelivery">
					        <thead>
					            <tr>
					                <th>Name</th>
					                <th>Position</th>
					                <th>Office</th>
					                <th>Age</th>
					                <th>Start date</th>
					                <th>Salary</th>
					            </tr>
					        </thead>
						</table>
					</div>
				</div>
				<div>
					<div class="margin-top-10 display-flex">
						<div class="box-button flex1">
							<div class="center height100">Promedio de entrega: 20 minutos</div>
						</div>
						<div class="box-button flex1">
							<div class="center height100">Promedio de entrega: 20 minutos</div>
						</div>
						<div class="box-button flex1">
							<div class="center height100">Promedio de entrega: 20 minutos</div>
						</div>
						<div class="box-button flex1">
							<div class="center height100">Promedio de entrega: 20 minutos</div>
						</div>
					</div>
				</div>
				<div class="margin-top-10 display-flex">
					<div class="box flex1">
						<div id="performanceChartContainer" class="chartBox"></div>
					</div>
					<div class="box flex1 margin-left-10">
						<div id="performanceChartContainerDelivery" class="chartBox"></div>
					</div>	
				</div>
			</div>
		</div>
	</body>
</html>