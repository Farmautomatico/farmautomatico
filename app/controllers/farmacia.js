
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/farmacia', function (req, res, next) {
		//console.log(db.regiones);
    //algo con db.farmacia.encontrarFarmacias(indexCiudad)
			console.log("esta es la variable de farmacia, favor usarla:")
      console.log(req.query); //mirar cmd
      /*
      En el ejs hacer un <input name="ciudad" value<%=ciudad%> type="hidden">
      y pasar la ciudad al render
      (recordar qué dijo el profe)
      para poder pasar la ciudad al req.query del get de abajo
      (ver centrosmedicos)
      */
		    res.render('farmacia', {

		     title: "Farmautomático",
		 });

});
router.get('/farmaciaformulario', function (req, res, next) {
    //algo con db.farmacia.algo
			console.log("esta es la variable de farmacia, favor usarla:")
		    res.render('farmacia', {

		     title: "Farmautomático",
		 });

});
