module.exports = function (sequelize, DataTypes) {

  var enfermedad = sequelize.define('enfermedad', {


  }, {
    classMethods:    {
			encontrarEnfermedades : function(){ return sequelize
                  .query('select nombre_enfermedad from enfermedad', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;});
                }
      }
  });
	return enfermedad
};
