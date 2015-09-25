module.exports = function (sequelize, DataTypes) {

  var centrosmedicos = sequelize.define('farmacia', {
  }, {
    classMethods:    {

      encontrarPrivados: function(ciudadpasada, enfermedad, edad){ return sequelize
                  .query('select * from farmacias where farmacia.comunas_idcomunas= ? and ?',
                    { raw: true, replacements: [edad, ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;});

      }
  });
	return centrosmedicos

};
