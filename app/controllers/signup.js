var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    path = require('path'),
    fs = require('fs'),
    multipart = require('connect-multiparty');


module.exports = function (app) {

    //var session = require('express-session');
    var bodyParser = require('body-parser');
    //app.use(bodyParser({uploadDir:'/public/img'}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));


    app.use('/', router);
    router.get('/signup', function(req, res, next){
      res.render('signup', {
        title: 'Farmautomatico',
        error: false
      })
    })


      router.post('/signup',  multipart(), function(req, res, next) {
        console.log(req.files);
        console.log(req.body);
        db.usuarios.encontrarUsuarios().then(function(resusuarios) {
          var bandera_usuario_encontrado = false;
          for (i in resusuarios) {
            if(req.body.nombreusuario == resusuarios[i].nombre) {
              bandera_usuario_encontrado = true;
              console.log("usuario encontrado");
            }
          }
        if(req.body.password == req.body.password2 && req.body.password && req.body.password2 && bandera_usuario_encontrado==false) {


          var ruta_archivo= req.files.foto_usuario.path;
          var nueva_ruta = "./public/imgsusuarios/" + req.body.nombreusuario+ path.extname(ruta_archivo ).toLowerCase();
          fs.createReadStream(ruta_archivo).pipe(fs.createWriteStream(nueva_ruta));
          var nombre_foto = req.body.nombreusuario+ path.extname(ruta_archivo ).toLowerCase();

          db.usuarios.insertarUsuario(req.body.nombreusuario, nombre_foto, req.body.password, req.body.email);
          var nombre_usuario = req.body.nombreusuario;
          req.session.name=nombre_usuario;
          //req.session.remedio = "Omeprazol";
          res.redirect("/remedio");

        }
        else {
          res.render('signup', {
            title: 'Farmautomatico',
            error: true
          })
        }
      })


      });
    }
