
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
		//console.log(db.regiones);
		db.regiones.sequelize.query('SELECT * FROM regiones', { raw: true }).then(function(filas){
			
			
				console.log(filas);
		var arreglo = [];
		for(i=0;i<filas.length;i++){
			arreglo.push(filas[1][i].nombre);
		}
			
		 db.Article.findAll().then(function (articles) {
		    res.render('index', {
		    	
		     title: arreglo[1],
		     articles: articles
   			});
		});
		 });

});

   
