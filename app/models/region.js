/*

var Sequelize = require('sequelize');

var crypto = require('crypto');
var DataTypes = require("sequelize");

*/  

module.exports = function (sequelize, DataTypes) {

  var region = sequelize.define('region', {
    idregion: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    classMethods: {
		/*.spread(function (res, metadata) {
						return res;

				})*/
	
		/*  .query('SELECT nombre FROM region').then(function(res){return res});/*
			  
			  })*/
			
      }
  });
	return region   

};
