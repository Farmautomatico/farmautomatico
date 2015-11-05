
var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function (app) {

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
	app.use('/', router);

    router.get('/', function (req, res, next) {
            res.render('index', {
            });
    });
};
