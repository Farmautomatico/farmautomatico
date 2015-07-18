var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function(app) {

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


    var telefono;
    router.get('/centrosmedicos', function(req, res, next) {
        //var indexCiudad = ciudad;
        //console.log(indexCiudad);
        //console.log(req);
        console.log(db);
        console.log(req.query.centrosMedicos);
        if (req.query.centrosMedicos != undefined) {
            switch (req.query.centrosMedicos) {
                case 'Privados':
                    db.centrosmedicos.encontrarPrivados(37).then(callbackmain);
                    break;
                case 'Publicos':
                    db.centrosmedicos.encontrarPublicos(37).then(callbackmain);
                    break;
                default:
                    db.centrosmedicos.encontrarTodos(37).then(callbackmain);
                    break;
            }

        } else {
            res.render('centrosmedicos', {

                title: "Farmautomático",
                cmedicos: []

            });

        }


        function callbackmain(resul) {
            var data = [],
                telef = [];
            console.log(resul);
            for (var i = 0; i < resul.length; i++) {
                //db.telefonocm.encontrar(resul[i].idCentrosMedicos).then(callbackfor);
                var dataint = [];
                telef.push(resul[i].telefono);
                if ((i < resul.length - 1) && (resul[i].idCentrosMedicos != resul[i + 1].idCentrosMedicos)) {
                    data.push([
                        resul[i].nombre,
                        resul[i].Direccion,
                        telef
                    ]);
                    telef = [];
                }
                if (i == resul.length - 1) {
                    data.push([
                        resul[i].nombre,
                        resul[i].Direccion,
                        telef
                    ])

                }
                /*data.push([
						resul[i].nombre,
						resul[i].Direccion,
						telef
					])*/







            }
            console.log(data);
            res.render('centrosmedicos', {

                title: "Farmautomático",
                cmedicos: data

            });
        }
    });

};