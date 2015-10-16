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


	// METODOS PARA LISTA DE ESPECIALISTAS
  /*
	router.get('/especialista', function (req, res, next) {

		res.render('especialista', {
			title: "Farmautomático",
			especialistas: [],
			ciudad: req.query.ciudad,
			especialidades: req.query.especialidad,
			enfermedad: req.query.enfermedad,
			edad: req.query.edad
         });
	});*/

	router.get('/especialistaformulario', function (req, res, next) {
		ciudad = req.query.ciudad;
		enfermedad = req.query.enfermedad;
		edad = req.query.edad;
		especialidad = req.query.especialidad;
		
		switch (req.query.especialidad) {
              case 'Todos':
				  db.especialista.encontrarEspecialistaTodos(ciudad, enfermedad, edad).then(callbackcmform);
                  break;
              default:
                  db.especialista.encontrarEspecialistaEspecialidad(ciudad, enfermedad, edad, especialidad).then(callbackcmform);
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
          res.render('especialista', {
            title: "Farmautomatico",
        	  especialidades: req.query.especialidad,
			  enfermedad: req.query.enfermedad,
			  edad: req.query.enfermedad,
        especialistas: [],
        ciudad: req.query.ciudad
          });
      }
})
	
	// METODOS PARA EL COMBO
	
	router.get('/especialista', function (req, res, next) {
		ciudad = req.query.ciudad;
		enfermedad = req.query.enfermedad;
		edad = req.query.edad;		
		db.especialista.encontrarEspecialidades(ciudad, enfermedad, edad).then(callbackcmform1);
    
    

	function callbackcmform1(resul_combo) {
          var data = [];
		  console.log(resul_combo);
          for (var i = 0; i < resul_combo.length; i++) {
                  data.push([
					resul_combo[i].especialidad
				]);
          }
	
          console.log(data);
          res.render('especialista', {
              title: "Farmautomático",
              especialidades: data,
			        especialistas: [],
              ciudad: req.query.ciudad,
        	  enfermedad: req.query.enfermedad,
			  edad: req.query.enfermedad
          });
     }
    

})};
