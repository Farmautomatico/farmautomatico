module.exports = function (sequelize, DataTypes) {

  var enfermedad = sequelize.define('enfermedad', {
      nombre_enfermedad: DataTypes.STRING

  }, {
    classMethods:    {
			encontrarEnfermedades : function(v){ return sequelize
                  .query('select nombre_enfermedad from enfermedad', { type: sequelize.QueryTypes.SELECT })
                 // .then(function(filas){console.log(filas); return filas;});
                }
      }
  })
	return enfermedad
};
