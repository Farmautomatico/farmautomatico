
var express = require('express'),
  router = express.Router(),
  espciudad, espedad, espenfermedad,
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/especialista', function (req, res, next) {
		//console.log(db.regiones);
    espciudad=ciudad,
     espedad=edad,
     espenfermedad=enfermedad
    console.log("estas son las variables de especialista, usarlas por favor")
			console.log(ciudad);
      console.log(edad);
      console.log(enfermedad);
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});

router.get('/especialistaformulario', function (req, res, next) {
		//console.log(db.regiones);
    console.log("estas son las variables de especialistaformulario, usarlas por favor")
			console.log(espciudad);
      console.log(espedad);
      console.log(espenfermedad);
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});
