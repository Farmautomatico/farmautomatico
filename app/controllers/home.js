
var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function (app) {
    
    //var session = require('express-session');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    /*	app.use(session({
  secret: 'farmautomatico',
  resave: false,
  saveUninitialized: true
}));*/
	app.use('/', router);
    
    router.get('/', function (req, res, next) {
        //console.log(db.comunas);
        db.comunas.encontrar().then(function (filas) {
            
            
            console.log(filas);
            var indicesCiudades = [];
            var arreglociudades = [];
            for (i = 0; i < filas[1].length; i++) {
                arreglociudades.push("Region: (" + filas[1][i].regiones_idregiones + "), " + filas[1][i].nombre);
                indicesCiudades.push(filas[1][i].idcomunas);
            }
            
            res.render('index', {
                
                title: "Farmautomático",
                indices : indicesCiudades,
                ciudades: arreglociudades
            });
        });

    });
    
    router.post('/', function (req, res, next) {
        
        //req.session.name = req.body.name;
        //req.session.ciudad = req.body.seleccionCiudad;
        //if(req.body.session.centroofarm == 'centromedico'){
        console.log("mi body está ready pal req:");
        console.log(req.body);
        remediosel = req.body.remedios;
        ciudad = req.body.seleccionCiudad;
        //res.send("hola");
        switch (req.body.submit) {
            case "Al Especialista":
                res.redirect('/especialista');
                break;
            case "A mi Medico o Farmacia":
                switch (req.body.centroofarm) {
                    case "farmacia":
                        res.redirect('/farmacia');
                    case "centromedico":
                        //var ciudad = req.body.seleccionCiudad;
                        res.redirect('/centrosmedicos');
                        //res.render('centrosmedicos', {ciudad: req.body.seleccionCiudad})
                }
                
                break;
            case "A los remedios":
                console.log(req.body);
                remediosel = req.body.remedios;
                res.redirect('/remedio');
                break;
        }
     //   var ciudad = req.body.seleccionCiudad;

       // res.redirect('/centrosmedicos');
        
        //console.log(req.session.seleccionCiudad);
        //res.send(req.session.seleccionCiudad);
        //res.redirect('/error');

      	//next();
      
 
	//}
    })
};



