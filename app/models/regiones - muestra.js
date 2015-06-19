
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
    classMethods:    {
	
		  
			encontrar : function(){ sequelize
									.query('SELECT * FROM regiones', { raw: true })
									.then(function(filas){console.log(filas); return filas;}); } 
			
      }
  });
	return region

};  