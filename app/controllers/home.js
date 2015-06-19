var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
	
		resu = db.regiones.encontrar();
		console.log("resu is : "+resu);
		var arreglo = [];
		for(i=0;i<resu.length;i++){
			arreglo.push(resu[i].nombre);
		}
			
		 db.Article.findAll().then(function (articles) {
		    res.render('index', {
		    	
		     title: arreglo[1],
		     articles: articles
   			});
		});
});

   
