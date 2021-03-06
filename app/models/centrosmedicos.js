module.exports = function (sequelize, DataTypes) {

  var centrosmedicos = sequelize.define('centrosmedicos', {
    idCentrosMedicos: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    comunas_idcomunas: DataTypes.INTEGER,
    Direcion: DataTypes.STRING,
    esPublico: DataTypes.BOOLEAN
  }, {
    classMethods:    {
			encontrarTodos : function(ciudadpasada){ return sequelize
                  .query('select * from centrosmedicos join telefonocm on centrosmedicos.idCentrosMedicos=telefonocm.CentrosMedicos_idCentrosMedicos where centrosmedicos.comunas_idcomunas= ?',
                    { raw: true, replacements: [ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  },
      encontrarPublicos: function(ciudadpasada){ return sequelize
                  .query('select * from centrosmedicos join telefonocm on centrosmedicos.idCentrosMedicos=telefonocm.CentrosMedicos_idCentrosMedicos where centrosmedicos.comunas_idcomunas= ? && centrosmedicos.esPublico=1',
                    { raw: true, replacements: [ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  },
      encontrarPrivados: function(ciudadpasada){ return sequelize
                  .query('select * from centrosmedicos join telefonocm on centrosmedicos.idCentrosMedicos=telefonocm.CentrosMedicos_idCentrosMedicos where centrosmedicos.comunas_idcomunas= ? && centrosmedicos.esPublico=0',
                    { raw: true, replacements: [ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
	return centrosmedicos

};  