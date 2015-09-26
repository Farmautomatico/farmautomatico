
var express = require('express'),
  router = express.Router(),
  indexCiudad,
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/farmacia', function (req, res, next) {
		//console.log(db.regiones);
    indexCiudad = ciudad;

    //algo con db.farmacia.encontrarFarmacias(indexCiudad)
			console.log("esta es la variable de farmacia, favor usarla:")
      console.log(ciudad);
		    res.render('farmacia', {

		     title: "Farmautomático",
		 });

});
router.get('/farmaciaformulario', function (req, res, next) {
		//console.log(db.regiones);
    //algo con db.farmacia.algo
			console.log("esta es la variable de farmacia, favor usarla:")
      console.log(ciudad);
		    res.render('farmacia', {

		     title: "Farmautomático",
		 });

});
