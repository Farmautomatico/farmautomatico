module.exports = function (sequelize, DataTypes) {

  var telefonocm = sequelize.define('telefonocm', {
    telefono: DataTypes.STRING,
    CentrosMedicos_idCentrosMedicos: DataTypes.INTEGER
    
  }, {
    classMethods:    {
			encontrar : function(v){ return sequelize
                  .query('SELECT telefono FROM telefonocm WHERE CentrosMedicos_idCentrosMedicos = ?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM telefonocm where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
      ,freezeTableName: true,
  tableName: 'telefonocm'
  }
  );
	return telefonocm

};  