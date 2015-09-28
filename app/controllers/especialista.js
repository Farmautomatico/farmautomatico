
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/especialista', function (req, res, next) {
		//console.log(db.regiones);
    console.log("estas son las variables de especialista, usarlas por favor")
			console.log(req.query); //mirar cmd
      /*
      En el ejs hacer un <input name="ciudad" value<%=ciudad%> type="hidden">
      y pasar la ciudad al render
      (recordar qué dijo el profe)
      para poder pasar la ciudad al req.query del get de abajo
      (ver centrosmedicos)
      */
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});

router.get('/especialistaformulario', function (req, res, next) {
		//console.log(db.regiones);
    console.log("estas son las variables de especialistaformulario, usarlas por favor")
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});
