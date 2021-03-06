var express = require('express'),
	router = express.Router(),
	remedioseleccionado,
	idcomentario;
db = require('../models');

module.exports = function(app) {
	app.use('/', router);


	router.get('/comentario/:nombreRemedio/:idcomentario', function(req, res, next) {
		//console.log(db.regiones);
		console.log("params:get");
		console.log(req.params);
		idcomentario = req.params.idcomentario;

		remedioseleccionado = req.params.nombreRemedio;
		db.usuarios_comenta_remedio.encontrarUnComentario(req.params.nombreRemedio, idcomentario).then(function(rescomentarios) {

			console.log(rescomentarios);
			foto_usuario = rescomentarios[0].foto_usuario ? "/public/imgsusuarios/" + rescomentarios[0].foto_usuario : "/public/imgsusuarios/caradehuevo.jpg"

			res.render('comentario', {

				title: "Farmautomático",
				nombreRemedio: req.params.nombreRemedio,
				//usuario_idusuario: rescomentarios[0].idusuario,
				fotousuario: foto_usuario,
				usuario_nombre: rescomentarios[0].nombre_usuario,
				comentario: rescomentarios[0].comentario,
				postAction: "/comentario?idcomentario="+idcomentario
					//remedio
			});

		});



	})

	router.post('/comentario', function(req, res, next) {
		/*console.log(req.body);
		console.log(req.query);
		console.log(req.params);
  		console.log(remedioseleccionado);*/
		/*
				{ seleccionComentario: '1',
				  comentario: 'Este es mi comentario',
				  submit: 'Comentar' }
		*/
		/*
		console.log("params:post");
		console.log(req.query);
		console.log(req.body);
		idcomentario=req.query.idcomentario;
		console.log("idcom");
		console.log(idcomentario);
*/

		switch (req.body.submit) {
			case 'Modificar': 	db.usuarios_comenta_remedio.ModificarUnComentario(idcomentario, req.body.comentario).then(function(err){console.log(err);});
								break;
			case 'Eliminar': 	db.usuarios_comenta_remedio.EliminarUnComentario(idcomentario);
								break;
		}


		remediosel = req.session.remedio;
		console.log(remedioseleccionado);
		pagina = '/remedio';
		res.redirect(pagina);
	});
}
