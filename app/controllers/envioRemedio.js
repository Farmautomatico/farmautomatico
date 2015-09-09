var express = require('express'),
  bodyParser = require('body-parser'),
	router = express.Router(),
	remedioseleccionado;
	db = require('../models');


module.exports = function(app) {
	app.use('/', router);
	app.use(bodyParser.json());

  router.post('/envioRemedio', function (req, res, next){
    console.log(req.body);
  });
}
