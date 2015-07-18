module.exports = function (sequelize, DataTypes) {

  var remedios = sequelize.define('remedios', {
    nombre: DataTypes.STRING,
    indicaciones: DataTypes.STRING,
    contraindicaciones: DataTypes.STRING,
    conservacion: DataTypes.STRING,
    interacciones: DataTypes.STRING,
    otrosdatos: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarRemedios : function(v){ return sequelize
                  .query('select * from remedios where nombre=?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
  return remedios

};  