var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    consultasindex = require('../queries/index.js');

module.exports = function (app) {

    //var session = require('express-session');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', router);

      router.get('/jsonRemedios', function (req, res, next) {
        consultasindex.consultas.buscarRemedios.then(function(nombreRemedios) {
          remedios = [];
          for(i in nombreRemedios) {
            remedios.push(nombreRemedios[i].dataValues.nombre);
          }
          console.log(remedios);
            res.json(JSON.stringify(remedios));

        })
      });
    }
