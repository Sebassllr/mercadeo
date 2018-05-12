var Firebase = {};

(function(){
	
	Firebase.database = null;
		
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
		Firebase.database.ref(path + '/').set({data});
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
	
	Firebase.getGraph = function(){

	}
	
})();

$(function(){
	Firebase.initializer();
});