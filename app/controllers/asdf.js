var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};



router.post('/centromedicoofarm', function(req, res){
	req.session.name = req.body.name;
	req.session.ciudad = req.body.seleccionCiudad;
	if(req.body.session.centroofarm == 'centromedico'){
		req.session.save(function() {
      	res.redirect('/centrosmedicos');
      
    })
	}
})
