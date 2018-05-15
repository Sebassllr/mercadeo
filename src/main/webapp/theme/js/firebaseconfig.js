var Firebase = {};

(function(){
	
	Firebase.database = null;
	
	Firebase.Promotions = [];
	
	Firebase.initializer = function(){
		var config = {
				apiKey: "AIzaSyA6mGhbSgcWQEkpHOVw_BirCW6rj4kVf4w",
			    authDomain: "modulomercadeo.firebaseapp.com",
			    databaseURL: "https://modulomercadeo.firebaseio.com",
			    projectId: "modulomercadeo",
			    storageBucket: "modulomercadeo.appspot.com",
			    messagingSenderId: "784092216363"
			  };
		firebase.initializeApp(config);
		Firebase.database = firebase.database();
		Firebase.writeInitialData();
	}
	
	Firebase.writeData = function(data, path){		
		Firebase.database.ref(path + '/' ).update({data});
	}
	
	Firebase.updateData = function(data, path){		
		Firebase.database.ref(path + '/' + data[0] ).update({data});
	}
	
	Firebase.readData = function(path){
		var data = firebase.database().ref(path);
		return data;
	}
	
	Firebase.writeInitialData = function(){
		var productos = [];
		productos["Papas"] = Firebase.makeProduct(1, "Papas", 1500, 6);
		productos["Hamburguesa"] = Firebase.makeProduct(2, "Hamburguesa", 2500, 3);
		productos["Perro"] = Firebase.makeProduct(3, "Perro", 3000, 10);
		productos["Gaseosa"] = Firebase.makeProduct(4, "Gaseosa", 3500, 17);	
		Firebase.writeData(productos, "productos");
		
		var pedidos = [];
		
		var pedido = [];
		
		pedido.push(Firebase.makeProduct(4, "Gaseosa", 3500));
		pedido.push(Firebase.makeProduct(2, "Hamburguesa", 2500));
		pedidos.push(Firebase.makePedido(1, "cra27b #27s-52", 1, "12/05/2018-17:36", "12/05/2018-17:30", "1", pedido));
		
		pedido = [];
		pedido.push(Firebase.makeProduct(4, "Perro", 3000));
		pedido.push(Firebase.makeProduct(2, "Papas", 1500));
		
		pedidos.push(Firebase.makePedido(1, "cra28b", 3, "12/05/2018-17:40", "12/05/2018-17:50", "1", pedido));
		
		pedido = [];
		pedido.push(Firebase.makeProduct(4, "Gaseosa", 3500));
		pedido.push(Firebase.makeProduct(2, "Hamburguesa", 2500));
		
		pedidos.push(Firebase.makePedido(1, "cra29b", 3, "12/05/2018-17:45", "12/05/2018-18:30", "1", pedido));
		
		pedido = [];
		pedido.push(Firebase.makeProduct(4, "Perro", 3000));
		pedido.push(Firebase.makeProduct(2, "Papas", 1500));
		
		pedidos.push(Firebase.makePedido(1, "cra30b", 1, "12/05/2018-17:50", "12/05/2018-18:30", "1", pedido));
		
		pedido = [];
		pedido.push(Firebase.makeProduct(4, "Perro", 3000));
		pedido.push(Firebase.makeProduct(2, "Papas", 1500));
		pedidos.push(Firebase.makePedido(1, "cra31b", 4, "12/05/2018-17:55", "12/05/2018-18:30", "1", pedido));
		
		pedido = [];
		pedido.push(Firebase.makeProduct(4, "Perro", 3000));
		pedido.push(Firebase.makeProduct(2, "Papas", 1500));
		
		pedidos.push(Firebase.makePedido(1, "cra32b", 3, "12/05/2018-16:36", "12/05/2018-17:30", "1", pedido));
		
		Firebase.writeData(pedidos, "pedidos");
	}
	
	Firebase.makeProduct = function(id, name, price, ventas){
		var producto = {};
		producto.id = id;
		producto.nombre = name;
		producto.precio = price;
		producto.ventas = ventas;
		return producto;
	}
	
	Firebase.makePedido = function(id, direccion, estado, FechaEntrega, FechaPedido, IdMensajero, Productos){
		var pedido = {};
		pedido.id = id;
		pedido.direccion = direccion;
		pedido.estado = estado;
		pedido.fechaEntrega = FechaEntrega;
		pedido.FechaPedido = FechaPedido;
		pedido.idMensajero = IdMensajero;
		return pedido;
	}
	
	Firebase.getVenta = function(){
		var pedido = [];
		var pedidos = firebase.database().ref('productos');
		return pedidos.once('child_added').then(function(snapshot) {
			var ped = snapshot.val();
	        return ped;
		}).catch(function(error){
	        alert('error:  ' + error);
	    });
	}
	
	Firebase.returnPedido = function(next){
		Firebase.getVenta().then(function(venta) {
			var graphData = [];
			var point = {};
			point.y = venta["Gaseosa"].ventas;
			point.label = venta["Gaseosa"].nombre;
			graphData.push(point);
			point = {};
			point.y = venta["Hamburguesa"].ventas;
			point.label = venta["Hamburguesa"].nombre;
			graphData.push(point);
			point = {};
			point.y = venta["Papas"].ventas;
			point.label = venta["Papas"].nombre;
			graphData.push(point);
			point = {};
			point.y = venta["Perro"].ventas;
			point.label = venta["Perro"].nombre;
			graphData.push(point);
			next(graphData);
		})
	}

	
	Firebase.getDataTable = function(next){
		Firebase.getVenta().then(function(venta) {
			var ventas = [];
			var point = [];
			point.push(venta["Gaseosa"].nombre);
			point.push(venta["Gaseosa"].precio);
			point.push(venta["Gaseosa"].ventas);
			ventas.push(point);
			point = [];
			
			point.push(venta["Hamburguesa"].nombre);
			point.push(venta["Hamburguesa"].precio);
			point.push(venta["Hamburguesa"].ventas);
			ventas.push(point);
			point = [];
			
			point.push(venta["Papas"].nombre);
			point.push(venta["Papas"].precio);
			point.push(venta["Papas"].ventas);
			ventas.push(point);
			point = [];
			
			point.push(venta["Perro"].nombre);
			point.push(venta["Perro"].precio);
			point.push(venta["Perro"].ventas);
			ventas.push(point);
			point = [];
			
			next(ventas);
		})
	}
	
	Firebase.savePromotion = function(promotion, path){
		Firebase.database.ref(path + '/' + promotion.name).update({promotion});
	}
	
	Firebase.getPromotion = function(){
		var pedido = [];

		var pedidos = firebase.database().ref('promotion');
		return pedidos.once('value').then(function(snapshot) {
			var ped = snapshot.val();
			for(var key in ped) {
				Firebase.Promotions.push(ped[key]);
	        }
			return(Firebase.Promotions);
		}).catch(function(error){
	        alert('error:  ' + error);
	    });
	}
	
	Firebase.getDataTablePromotion = function(next){
		Firebase.getPromotion().then(function(promotions) {
			var prom = [];
			for (var i = 0; i < promotions.length; i++) {
				var data = promotions[i];
				prom.push(Object.values(data["promotion"]));
			}
			console.log(prom);
			next(prom);
		});
	}
	
	Firebase.eraseData = function(node){
		var nullItem = null;
		Firebase.database.ref('promotion/' + node).set({nullItem});
	}
	
})();

$(function(){
	Firebase.initializer();
})