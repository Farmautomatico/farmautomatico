module.exports = function (sequelize, DataTypes) {

  var comunas = sequelize.define('comunas', {
    idcomunas: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    regiones_idregiones: DataTypes.INTEGER
    

  }, {
    classMethods:    {
			encontrar : function(){ return sequelize
                  .query(' select * from comunas order by regiones_idregiones', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
                } 
      }
  });
	return comunas
};