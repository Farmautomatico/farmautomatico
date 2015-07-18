var express = require('express'),
	router = express.Router(),
	db = require('../models');

module.exports = function(app) {
	app.use('/', router);
};

router.get('/remedio', function(req, res, next) {
	//console.log(db.regiones);
	remedioseleccionado = remediosel;
	db.remedios.encontrarRemedios(remedioseleccionado).then(function(resremedio) {
		//var nombreRemedio = resremedio[0].nombre;

		db.remedios_comenta_usuarios.encontrarComentarios(remedioseleccionado).then(function(rescomentarios) {



			console.log(rescomentarios);
			var fotos = [],
				nombres_usuariosenc = [],
				comentarios = [],
				idcomentarios = []
			for (i in rescomentarios) {
				fotos.push(rescomentarios[i].foto_usuario ? "imgsusuarios/" + rescomentarios[i].foto_usuario : "imgsusuarios/caradehuevo.jpg");
				nombres_usuariosenc.push(rescomentarios[i].nombre_usuario ? rescomentarios[i].nombre_usuario : "");
				comentarios.push(rescomentarios[i].comentario ? rescomentarios[i].comentario : "");
				console.log(rescomentarios[i].comentario);
				idcomentarios.push(rescomentarios[i].idcomentarios)
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
					nombre: resremedio[0].nombre,
					indicaciones: resremedio[0].indicaciones,
					contraindicaciones: resremedio[0].contraindicaciones,
					conservacion: resremedio[0].conservacion,
					interacciones: resremedio[0].interacciones,
					otros: resremedio[0].otrosdatos,
					comentarios: comentarios,
					fotos: fotos,
					nombres_usuariosenc: nombres_usuariosenc,
					idcomentarios: idcomentarios,
					usuarios_nombre: usuarios.nombre,
					usuarios_idusuario: usuarios.idusuario,
					usuarios_foto: usuarios.foto
				});

			})



		})



	})



});