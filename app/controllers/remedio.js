var express = require('express'),
  router = express.Router(),
  remedioseleccionado;
db = require('../models');

module.exports = function(app) {
  app.use('/', router);


  router.get('/remedio', function(req, res, next) {
    //console.log(db.regiones);
    console.log(req.session.name);
    if(req.query.remedios){
      remedioseleccionado = req.query.remedios;
      req.session.remedio = req.query.remedios;
    }else if(req.session.remedio){
      remedioseleccionado = req.session.remedio;
    };
    console.log(req.query);
    db.remedios.findOne({
      where: {
        nombre: remedioseleccionado
      }
    }).then(function(resremedio) {
      //var nombreRemedio = resremedio.dataValues.nombre;
      db.usuarios_comenta_remedio.findAll({
        attributes: ['remedios_nombre',  'comentario'],
        where: {
          remedios_nombre: remedioseleccionado
        },
        order: [
          ['fecha_comentario', 'DESC']
        ],
        include: [{model: db.usuarios, 
          required: true,
          attributes: [['foto', 'foto_usuario'], ['idusuario', 'idusuario'], ['nombre', 'nombre_usuario']]
        }]
      }).then(function(rescomentarios) {



        console.log(rescomentarios);
        var fotos = [],
          nombres_usuariosenc = [],
          comentarios = [],
          idcomentarios = [],
          comentarios_idusuarios = []
        for (i in rescomentarios) {
          fotos.push(rescomentarios[i].usuario.dataValues.foto_usuario ? "/public/imgsusuarios/" + rescomentarios[i].usuario.dataValues.foto_usuario : "/public/imgsusuarios/caradehuevo.jpg");
          nombres_usuariosenc.push(rescomentarios[i].usuario.dataValues.nombre_usuario ? rescomentarios[i].usuario.dataValues.nombre_usuario : "");
          comentarios.push(rescomentarios[i].dataValues.comentario ? rescomentarios[i].dataValues.comentario : "");
          console.log(rescomentarios[i].dataValues.comentario);
          idcomentarios.push("comentario/" + remedioseleccionado + "/" + rescomentarios[i].dataValues.idcomentarios);
          comentarios_idusuarios.push(rescomentarios[i].usuario.dataValues.idusuario);
        }
        console.log(comentarios);
        console.log(nombres_usuariosenc);

        db.usuarios.findAll().then(function(resusuarios) {

          var usuarios = {
            idusuario: [],
            nombre: [],
            foto: []


          }
          for (i in resusuarios) {
            usuarios.idusuario.push(resusuarios[i].dataValues.idusuario);
            usuarios.nombre.push(resusuarios[i].dataValues.nombre);
            usuarios.foto.push(resusuarios[i].dataValues.foto);
            if(req.session.name==resusuarios[i].dataValues.nombre){
              req.session.id=resusuarios[i].dataValues.idusuario;
            }


          }
          if(req.session.name==undefined){
            login= false;
          }
          else{
            login=true;
          }
          res.render('remedio', {

            title: "Farmautomático",
            //remedio
            nombre: resremedio.dataValues.nombre,
            nombre2: resremedio.dataValues.nombre,
            indicaciones: resremedio.dataValues.indicaciones,
            contraindicaciones: resremedio.dataValues.contraindicaciones,
            conservacion: resremedio.dataValues.conservacion,
            interacciones: resremedio.dataValues.interacciones,
            otros: resremedio.dataValues.otrosdatos,
            logina: login,
            idusuario: req.session.id,
            comentarios: comentarios,
            usuarioingresado: req.session.id,
            fotos: fotos,
            nombres_usuariosenc: nombres_usuariosenc,
            idcomentarios: idcomentarios,
            //usuario
            usuarios_nombre: usuarios.nombre,
            usuarios_idusuario: usuarios.idusuario,
            usuarios_foto: usuarios.foto,
            comiduser: comentarios_idusuarios,
            nombre_usuario_logueado: req.session.name
          });
        })
      })
    })
  });

  router.post('/remedio', function(req, res, next) {
    /*console.log(req.body);
		console.log(req.query);
		console.log(req.params);
  		console.log(remedioseleccionado);*/
    /*
    		{ seleccionComentario: '1',
    		  comentario: 'Este es mi comentario',
    		  submit: 'Comentar' }
    */
    console.log("post remedio");
    console.log(req.query);
    console.log(req.body);
    remediosel = req.body.remedio;
    console.log(req.session.name);
    switch (req.body.submit){
      case 'Loguearse':
                  res.redirect('/login');
                  break;
      case 'Comentar':
                  db.usuarios_comenta_remedio.ingresarUnComentario(remedioseleccionado, req.session.id, req.body.comentario);
                  console.log(req.body);
                  pagina = '/remedio';
                  res.redirect(pagina);
                  break;
      case 'Registrarse':
                	res.redirect("/signup");
                	break;
      case 'Salir':
                	req.session.id=undefined;
                  req.session.name=undefined;
                  res.redirect("/remedio");
                  break;
    }
    /*
    if (req.session.name==undefined) {
      res.redirect('/login');
    } else {
      db.usuarios_comenta_remedio.ingresarUnComentario(remedioseleccionado, req.session.name, req.body.comentario);
      console.log(req.body);
      pagina = '/remedio';
      res.redirect(pagina);
    }*/
  });
}
