var express = require('express'),
    router = express.Router(),
    consultasindex = require('../queries/queries.js'),
    db = require('../models');

module.exports = function (app) {

    //var session = require('express-session');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', router);

      router.get('/jsonEnfermedades', function (req, res, next) {
        console.log(consultasindex);
        consultasindex.index.buscarNombreEnfermedades.then(function(nombreEnfermedad) {
          //console.log("enfermedades");
          //console.log(nombreEnfermedad);
          enfermedades=[];
          for(i in nombreEnfermedad){
            enfermedades.push(nombreEnfermedad[i].dataValues.nombre_enfermedad);
          }
          console.log(enfermedades);
          res.json(JSON.stringify(enfermedades));

        })

      });
      router.post('/jsonEnfermedades', function (req, res, next) {
        console.log("esto no pasa");
      });
    }
