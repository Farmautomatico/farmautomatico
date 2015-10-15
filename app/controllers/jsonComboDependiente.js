var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function(app) {

  //var session = require('express-session');
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

  router.get('/jsonComboDependiente', function(req, res, next) {
    //console.log(db.comunas);
    db.comunas.encontrarComunas().then(function(filas) {
      db.comunas.encontrarRegiones().then(function(regionesres) {

        arregloCombo = [];
        for (i = 0; i < regionesres[1].length; i++) {
          arregloCombo.push({
            Id: regionesres[1][i].idregiones,
            Name: regionesres[1][i].nombre,
            Items: []
          });
        }

        for (i = 0; i < filas[1].length; i++) {
          for (j = 0; j < arregloCombo.length; j++) {
            if (arregloCombo[j].Id == filas[1][i].regiones_idregiones) {
              console.log(filas[1][i].idcomunas);
              arregloCombo[j].Items.push({
                Id: filas[1][i].idcomunas,
                Name: filas[1][i].nombre
              })
            }
          }
        }
        console.log(arregloCombo);
        res.json(JSON.stringify(arregloCombo));
      })
    })
  })
}
