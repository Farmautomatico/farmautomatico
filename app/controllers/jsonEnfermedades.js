var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function (app) {

    //var session = require('express-session');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', router);

      router.get('/jsonEnfermedades', function (req, res, next) {

        db.enfermedad.encontrarEnfermedades().then(function(nombreEnfermedad) {
          console.log("enfermedades");
          console.log(nombreEnfermedad);
          enfermedades=[];
          for(i in nombreEnfermedad){
            enfermedades.push(nombreEnfermedad[i].nombre_enfermedad);
          }
          console.log(enfermedades);
          res.json(JSON.stringify(enfermedades));

        })
        /*db.remedios.encontrarNombresRemedios().then(function(nombreRemedios) {
          remedios = [];
          for(i in nombreRemedios) {
            remedios.push(nombreRemedios[i].nombre);
          }
          console.log(remedios);
            res.json(JSON.stringify(remedios));

        })*/
        //remedios = ['Omeprazol', 'Loratadina', 'Otro'];



      });
      router.post('/jsonEnfermedades', function (req, res, next) {
        console.log("esto no pasa");
      });
    }
