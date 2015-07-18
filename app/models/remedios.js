module.exports = function (sequelize, DataTypes) {

  var centrosmedicos = sequelize.define('centrosmedicos', {
    idCentrosMedicos: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    Direcion: DataTypes.STRING,
    esPublico: DataTypes.BOOLEAN
  }, {
    classMethods:    {
      encontrarDatos : function(v){ return sequelize
                  .query('select * from centrosmedicos join telefonocm on centrosmedicos.idCentrosMedicos=telefonocm.CentrosMedicos_idCentrosMedicos where centrosmedicos.ciudad= ?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
  return centrosmedicos

};  