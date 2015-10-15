var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {

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


	
	router.get('/especialista', function (req, res, next) {
		
		res.render('especialista', {
			title: "Farmautomático",
			especialistas: [],
			ciudad: req.query.ciudad,
			especialidad: req.query.especialidad,
			enfermadad: req.query.enfermedad,
			edad: req.query.enfermadad
         });
	});
	router.get('/especialistaformulario', function (req, res, next) {
		ciudad: req.query.ciudad,
		enfermadad: req.query.enfermedad,
		edad: req.query.enfermadad

		switch (req.query.especialidad) {
            case 'odontologo':
                  db.especialista.encontrarEspecialistaOdontologo(ciudad, enfermedad, edad).then(callbackcmform);
                  break;
			case 'kinesiologo'
                  db.especialista.encontrarEspecialistaKinesiologo(ciudad, enfermedad, edad).then(callbackcmform);
                  break;
			case 'cirujano'
                  db.especialista.encontrarEspecialistaCirujano(ciudad, enfermedad, edad).then(callbackcmform);
                  break;
            default:
                  db.especialista.encontrarEspecialistaTodos(ciudad, enfermedad, edad).then(ciudad, enfermedad, edad);
                  break;
        }

	function callbackcmform(resul) {
          var data = [], telef = [];
		  console.log(resul);
          for (var i = 0; i < resul.length; i++) {
              var dataint = [];
              telef.push(resul[i].telefono);
              if ((i < resul.length - 1) && (resul[i].id_especialista != resul[i + 1].id_especialista)) {
                  data.push([
					resul[i].nombre_especialista,
					resul[i].especialidad,
					resul[i].email,
					resul[i].direccion,
					telef
				  ]);
                  telef = [];
              }
              if (i == resul.length - 1) {
                  data.push([
					resul[i].nombre_especialista,
					resul[i].especialidad,
					resul[i].email,
					resul[i].direccion,
					telef
                  ])
              }
          }
          console.log(data);
          res.render('especialistas', {
              title: "Farmautomático",
              especialistas: data,
              ciudad: req.query.ciudad,
        	  especialidad: req.query.especialidad,
			  enfermadad: req.query.enfermedad,
			  edad: req.query.enfermadad
          });
      }
    })

};
/*
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/especialista', function (req, res, next) {
		//console.log(db.regiones);
    console.log("estas son las variables de especialista, usarlas por favor")
			console.log(req.query); //mirar cmd
      /*
      En el ejs hacer un <input name="ciudad" value<%=ciudad%> type="hidden">
      y pasar la ciudad al render
      (recordar qué dijo el profe)
      para poder pasar la ciudad al req.query del get de abajo
      (ver centrosmedicos)
      *//*
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});

router.get('/especialistaformulario', function (req, res, next) {
		//console.log(db.regiones);
    console.log("estas son las variables de especialistaformulario, usarlas por favor")
		    res.render('especialista', {

		     title: "Farmautomático",
		 });

});
*/
