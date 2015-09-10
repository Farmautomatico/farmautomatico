var express = require('express'),
	router = express.Router(),
	remedioseleccionado;
	db = require('../models');

module.exports = function(app) {
	app.use('/', router);


router.get('/remedio', function(req, res, next) {
	//console.log(db.regiones);
	remedioseleccionado = req.session.remedio;
	db.remedios.encontrarRemedios(remedioseleccionado).then(function(resremedio) {
		//var nombreRemedio = resremedio[0].nombre;

		db.remedios_comenta_usuarios.encontrarComentarios(remedioseleccionado).then(function(rescomentarios) {



			console.log(req.body);
			var fotos = [],
				nombres_usuariosenc = [],
				comentarios = [],
				idcomentarios = []
			for (i in rescomentarios) {
				fotos.push(rescomentarios[i].foto_usuario ? "/public/imgsusuarios/" + rescomentarios[i].foto_usuario : "/public/imgsusuarios/caradehuevo.jpg");
				nombres_usuariosenc.push(rescomentarios[i].nombre_usuario ? rescomentarios[i].nombre_usuario : "");
				comentarios.push(rescomentarios[i].comentario ? rescomentarios[i].comentario : "");
				console.log(rescomentarios[i].comentario);
				idcomentarios.push("comentario/"+remediosel+"/"+rescomentarios[i].idcomentarios)
			}
			console.log(comentarios);
			console.log(nombres_usuariosenc);

			db.usuarios.encontrarUsuarios().then(function (resusuarios) {

				var usuarios= {
					idusuario: [],
					nombre: [],
					foto: []


				}
				for (i in resusuarios){
					usuarios.idusuario.push(resusuarios[i].idusuario);
					usuarios.nombre.push(resusuarios[i].nombre);
					usuarios.foto.push(resusuarios[i].foto);



				}

				res.render('remedio', {

					title: "Farmautomático",
					//remedio
					nombre: resremedio[0].nombre,
					indicaciones: resremedio[0].indicaciones,
					contraindicaciones: resremedio[0].contraindicaciones,
					conservacion: resremedio[0].conservacion,
					interacciones: resremedio[0].interacciones,
					otros: resremedio[0].otrosdatos,
					//comentario
					comentarios: comentarios,
					usuarioingresado: req.session.name,
					fotos: fotos,
					nombres_usuariosenc: nombres_usuariosenc,
					idcomentarios: idcomentarios,
					//usuario
					usuarios_nombre: usuarios.nombre,
					usuarios_idusuario: usuarios.idusuario,
					usuarios_foto: usuarios.foto
				});

			})



		})



	})



});

router.post('/remedio', function (req, res, next) {
		/*console.log(req.body);
		console.log(req.query);
		console.log(req.params);
  		console.log(remedioseleccionado);*/
/*
		{ seleccionComentario: '1',
		  comentario: 'Este es mi comentario',
		  submit: 'Comentar' }
*/
		db.remedios_comenta_usuarios.ingresarUnComentario(remedioseleccionado, req.body.seleccionUsuarioComentario, req.body.comentario);
		console.log(req.body);
		pagina = '/remedio';
        res.redirect(pagina);
	});
}
