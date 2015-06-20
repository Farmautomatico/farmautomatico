
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/centrosmedicos', function (req, res, next) {
		//console.log(db.regiones);
			db.centrosmedicos.encontrar(37).then(function(resul){
				var data=[];
				for (var i in resul){
					data.push([
						resul[i].nombre,
						resul[i].Direccion,
						['123']
						]
						) 



				}
				/*var data=[
				["Hospital borja",
					 "calle hola",
					['123', '456']
				],
				[ "Hospital san borja",
					"calle chao",
					['123']
				]
				];*/
				console.log(data);
				res.render('centrosmedicos', {
		    	
		    	title: "Farmautomático",
		    	cmedicos: data

		 		});
			})
		    

});   