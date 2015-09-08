var express = require('express'),
	router = express.Router(),
	remedioseleccionado;
	db = require('../models');

module.exports = function(app) {
	app.use('/', router);


router.get('/login', function(req, res, next) {
	//console.log(db.regiones);
	console.log("params del login:");
	console.log(remediosel);
				//remedioseleccionado = req.params.remediosel;

				res.render('login', {

					title: "Farmautomático"
					//remedio

				});

			});


router.post('/login', function (req, res, next) {
		req.session.name = req.body.nombre;

		/*console.log(req.body);
		console.log(req.query);
		console.log(req.params);
  		console.log(remedioseleccionado);*/
/*
		{ seleccionComentario: '1',
		  comentario: 'Este es mi comentario',
		  submit: 'Comentar' }
*/	console.log(req.body);
		//nombre = req.body.nombre;
		//remediosel = remedioseleccionado;
		//app.set('remedio', remediosel);
		//remedioseleccionado = remediosel;
		req.session.remedio = remediosel;

		//req.session.save(function(err){});
		pagina = '/remedio';
        res.redirect(pagina);
	});
}
