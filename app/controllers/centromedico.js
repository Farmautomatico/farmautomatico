
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/centromedico', function (req, res, next) {
		//console.log(db.regiones);
			//db.centrosmedicos.encontrar(37).then(function(resul){
				var data=[
				["Hospital borja",
					 "calle hola",
					['123', '456']
				],
				[ "Hospital san borja",
					"calle chao",
					['123']
				]
				];
				console.log(JSON.stringify(data));
				res.render('centromedico', {
		    	
		    	title: "Farmautomático",
		    	cmedicos: data

		 		});
			//})
		    

});   