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
    db.comunas.findAll({
      order: [
        ['regiones_idregiones', 'ASC'],
        ['nombre', 'ASC']
      ]
    }).then(function(filas) {
      db.regiones.findAll().then(function(regionesres) {
        //console.log(filas);
        console.log(regionesres);

        arregloCombo = [];
        for (i = 0; i < regionesres.length; i++) {
          arregloCombo.push({
            Id: regionesres[i].dataValues.idregiones,
            Name: regionesres[i].dataValues.nombre,
            Items: []
          });
        }

        for (i = 0; i < filas.length; i++) {
          for (j = 0; j < arregloCombo.length; j++) {
            if (arregloCombo[j].Id == filas[i].dataValues.regiones_idregiones) {
              console.log(filas[i].idcomunas);
              arregloCombo[j].Items.push({
                Id: filas[i].dataValues.idcomunas,
                Name: filas[i].dataValues.nombre
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
