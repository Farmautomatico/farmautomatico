
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/remedio', function (req, res, next) {
		//console.log(db.regiones);
			remedioseleccionado = remediosel;
			db.remedios.encontrarRemedios(remedioseleccionado).then(function (resultado){

				console.log(resultado);



				res.render('remedio', {
		    	
		     		title: "Farmautomático",
		     		nombre: resultado[0].nombre,
		     		indicaciones: resultado[0].indicaciones,
		     		contraindicaciones: resultado[0].contraindicaciones,
		     		conservacion: resultado[0].conservacion,
		     		interacciones: resultado[0].interacciones,
		     		otros: resultado[0].otros
		 		});
			})

		    

});