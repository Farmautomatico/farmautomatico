
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/remedio', function (req, res, next) {
		//console.log(db.regiones);
			
		    res.render('remedio', {
		    	
		     title: "Farmautomático",
		 });

});