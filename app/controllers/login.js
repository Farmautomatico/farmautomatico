var express = require('express'),
  //bodyParser = require('body-parser'),
	router = express.Router(),
	remedioseleccionado;
	db = require('../models');


module.exports = function(app) {
	app.use('/', router);
	//app.use(bodyParser.json());
}

router.get('/login', function(req, res, next) {
	//console.log(db.regiones);
	console.log("get login");
	console.log(remediosel);
				//remedioseleccionado = req.params.remediosel;
				res.render('login', {

					title: "Farmautomático",
					nombre_remedio: remediosel
					//remedio

				});

			});


router.post('/login', function (req, res, next) {
console.log("body del post login");
remedios = req.body.remedio;
console.log(req.body);
		db.usuarios.encontrarUsuarios().then(function(users) {
			for(i in users) {
				if(req.body.nombreusuario==users[i].nombre && req.body.password==users[i].contrasena){
					console.log(users[i].nombre);
					req.session.name = users[i].idusuario;
					req.session.username = req.body.nombreusuario;
					//req.session.remedio = remediosel;
					req.session.remedio = remedios;
					res.redirect('/remedio');
				}
			}
			req.session.name = undefined;
			req.session.remedio = remedios;
			res.redirect('/remedio');
		});

		/*console.log(req.body);
		console.log(req.query);
		console.log(req.params);
  		console.log(remedioseleccionado);*/
/*
		{ seleccionComentario: '1',
		  comentario: 'Este es mi comentario',
		  submit: 'Comentar' }
*/
		//nombre = req.body.nombre;
		//remediosel = remedioseleccionado;
		//app.set('remedio', remediosel);
		//remedioseleccionado = remediosel;


		//req.session.save(function(err){});
	});
