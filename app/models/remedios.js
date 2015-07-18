module.exports = function (sequelize, DataTypes) {

  var remedios = sequelize.define('remedios', {
    idremedios: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    indicaciones: DataTypes.STRING,
    contraindicaciones: DataTypes.STRING,
    conservacion: DataTypes.STRING,
    interacciones: DataTypes.STRING,
    otrosdatos: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarRemedios : function(v){ return sequelize
                  .query('select * remedios where idremedios= ?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
  return remedios

};  