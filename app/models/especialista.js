module.exports = function (sequelize, DataTypes) {

  var especialista = sequelize.define('farmacia', {
  }, {
    classMethods:    {

      encontrarEspecialidades: function(ciudadpasada){ return sequelize
                  .query('select * from farmacias where farmacia.comunas_idcomunas= ? and ?',
                    { raw: true, replacements: [ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  },
      encontrarEspecialistas: function(ciudadpasada, enfermedad, edad){ return sequelize
                              .query('select * from farmacias where farmacia.comunas_idcomunas= ? and ?',
                                { raw: true, replacements: [edad, ciudadpasada], type: sequelize.QueryTypes.SELECT })
                              },
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;});

      }
  });
	return especialista

};
