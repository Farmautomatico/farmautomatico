
/*
var Sequelize = require('sequelize');

var crypto = require('crypto');
var DataTypes = require("sequelize");
*/
  


module.exports = function (sequelize, DataTypes) {

  var regiones = sequelize.define('regiones', {
    idregiones: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    classMethods:    {
			encontrar : function(){ return sequelize
                  .query('SELECT * FROM regiones', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
                } 
      }
  });
	return regiones

};  