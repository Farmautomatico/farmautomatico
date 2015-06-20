
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

var telefono;
router.get('/centrosmedicos', function (req, res, next) {
		db.centrosmedicos.encontrarPrivados(37).then(function(resul){
		var data=[],
		telef = [];
		console.log(resul);
		for (var i=0; i<resul.length;i++){
			//db.telefonocm.encontrar(resul[i].idCentrosMedicos).then(callbackfor);
				
			if(i < resul.length -1){
				console.log(i);
				if(resul[i].idCentrosMedicos==resul[i+1].idCentrosMedicos){
					telef.push(resul[i].telefono, resul[i+1].telefono)
					data.push([
						resul[i].nombre,
						resul[i].Direccion,
						telef
					])
				}
			}
			else{
				telef = [resul[i].telefono];
				data.push([
					resul[i].nombre,
					resul[i].Direccion,
					telef
				])

			}
				 
			
		}
		console.log(data);
		res.render('centrosmedicos', {
    	
    	title: "Farmautomático",
    	cmedicos: data

 		});
	})
});   