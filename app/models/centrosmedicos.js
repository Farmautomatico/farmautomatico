module.exports = function (sequelize, DataTypes) {

  var centromedicos = sequelize.define('centromedicos', {
    idCentrosMedicos: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    Direcion: DataTypes.STRING,
    esPublico: DataTypes.BOOLEAN
  }, {
    classMethods:    {
			encontrar : function(ciudadpasada){ return sequelize
                  .findAll({ where: { ciudad: ciudadpasada} })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
	return centromedicos

};  