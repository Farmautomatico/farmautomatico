
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/farmacia', function (req, res, next) {
		//console.log(db.regiones);
			ciudadsel
      db.farmacia.encontrarFarmacias(ciudad).then(funcion(resul){
        console.log(resul)
        res.render('farmacia', {

		     title: "Farmautomático",
         farmacias: ,
         farmacias-values:
		 });
      })


});

router.get('/farmaciacontroller', function (req, res, next) {
		//console.log(db.regiones);
			console.log(req.query)
      db.farmacia.
		    res.render('farmacia', {

		     title: "Farmautomático",
		 });

});
