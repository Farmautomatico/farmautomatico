var express = require('express'),
  //bodyParser = require('body-parser'),
	router = express.Router(),
	remedioseleccionado;
	db = require('../models');


module.exports = function(app) {
	app.use('/', router);
	//app.use(bodyParser.json());


router.get('/login', function(req, res, next) {
	//console.log(db.regiones);
	console.log("body del login:");
	console.log(req.body);
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
