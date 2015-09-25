
var express = require('express'),
  router = express.Router(),
  datos-combo,
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/especialista', function (req, res, next) {
		//console.log(db.regiones);
      console.log("mostrando ciudad en esp");
			console.log(ciudad);
      db.especialista.funcionaCrear(param1, param2).then(function(resultado){
        console.log(resultado);
        res.render('especialista', {

		     title: "Farmautomático",
         especialidades-combo: datos-combo
		 });

      })


});

router.get('/especialistaform', function (req, res, next) {
		//console.log(db.regiones);

		    res.render('especialista', {

		     title: "Farmautomático",
         especialidades-combo: datos-combo

		 });

});
