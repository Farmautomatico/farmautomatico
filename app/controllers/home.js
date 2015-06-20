
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
	
	//var session = require('express-session');
  	var bodyParser = require('body-parser');  
	app.use(bodyParser.json());  
	app.use(bodyParser.urlencoded({ extended: false }));
/*	app.use(session({
  secret: 'farmautomatico',
  resave: false,
  saveUninitialized: true
}));*/
	app.use('/', router);

  router.get('/', function (req, res, next) {
		//console.log(db.regiones);
		db.regiones.encontrar().then(function(filas){
			
			
				console.log(filas);
				var indicesCiudades = [];
		var arreglociudades = [];
		for(i=0;i<filas[1].length;i++){
			arreglociudades.push("("+filas[1][i].region_idregion+")"+filas[1][i].nombre);
			indicesCiudades.push(filas[1][i].codigoInterno);
		}
			
		    res.render('index', {
		    	
		     title: "Farmautomático",
		     indices : indicesCiudades,
		     ciudades: arreglociudades
		});
		 });

});   
   
router.post('/', function(req, res, next){
	//req.session.name = req.body.name;
	//req.session.ciudad = req.body.seleccionCiudad;
	//if(req.body.session.centroofarm == 'centromedico'){
		switch(req.body.submit){
			case "Al Especialista":
				res.redirect('/especialista');
				break;
			case "A mi Medico o Farmacia":
				res.redirect('/centrosmedicos');
				break;
			case "A los remedios":
				res.redirect('/remedio');
				break;
		}
		seleccity = req.body.seleccionCiudad;
		//console.log(req.session.seleccionCiudad);
		//res.send(req.session.seleccionCiudad);
      		res.redirect('/centrosmedicos');

      	//next();
      
 
	//}
})
};



