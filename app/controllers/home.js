
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
		//console.log(db.regiones);
		db.regiones.encontrar().then(function(filas){
			
			
				console.log(filas);
		var arreglo = [];
		for(i=0;i<filas[1].length;i++){
			arreglo.push("("+filas[1][i].region_idregion+")"+filas[1][i].nombre);
		}
			
		    res.render('index', {
		    	
		     title: "Farmautomático",
		     ciudades: arreglo,
		});
		 });

});   


   
