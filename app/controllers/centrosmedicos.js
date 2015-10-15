var express = require('express'),
    router = express.Router(),
    indexCiudad,
    db = require('../models');

module.exports = function(app) {

    // var session = require('express-session');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    /*	app.use(session({
	  secret: 'farmautomatico',
	  resave: false,
	  saveUninitialized: true
	}));*/
    app.use('/', router);


    var telefono;
    router.get('/centrosmedicos', function(req, res, next) {
            res.render('centrosmedicos', {

                title: "Farmautomático",
                cmedicos: [],
                ciudad: req.query.ciudad

            });
    });
    router.get('/centrosmedicosformulario', function(req, res, next) {
      indexCiudad = req.query.ciudad;
          switch (req.query.centrosMedicos) {
              case 'Privados':
                  db.centrosmedicos.encontrarPrivados(indexCiudad).then(callbackcmform);
                  break;
              case 'Publicos':
                  db.centrosmedicos.encontrarPublicos(indexCiudad).then(callbackcmform);
                  break;
              default:
                  db.centrosmedicos.encontrarTodos(indexCiudad).then(callbackcmform);
                  break;
          }


      function callbackcmform(resul) {
          var data = [],
              telef = [];
          console.log(resul);
          for (var i = 0; i < resul.length; i++) {
              //db.telefonocm.encontrar(resul[i].idCentrosMedicos).then(callbackfor);
              var dataint = [];
              telef.push(resul[i].telefono);
              if ((i < resul.length - 1) && (resul[i].idCentrosMedicos != resul[i + 1].idCentrosMedicos)) {
                  data.push([
                      resul[i].nombre,
                      resul[i].direccion,
                      telef
                  ]);
                  telef = [];
              }
              if (i == resul.length - 1) {
                  data.push([
                      resul[i].nombre,
                      resul[i].direccion,
                      telef
                  ])

              }
              /*data.push([
          resul[i].nombre,
          resul[i].Direccion,
          telef
        ])*/







          }
          console.log(data);
          res.render('centrosmedicos', {

              title: "Farmautomático",
              cmedicos: data,
              ciudad: req.query.ciudad

          });
      }
    })

};
