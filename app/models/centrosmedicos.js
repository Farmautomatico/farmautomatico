module.exports = function (sequelize, DataTypes) {

  var centrosmedicos = sequelize.define('centrosmedicos', {
    idCentrosMedicos: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    Direcion: DataTypes.STRING,
    esPublico: DataTypes.BOOLEAN
  }, {
    classMethods:    {
			encontrar : function(v){ return sequelize
                  .query('SELECT * FROM centrosmedicos WHERE ciudad = ?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
	return centrosmedicos

};  