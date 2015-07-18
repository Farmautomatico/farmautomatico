module.exports = function (sequelize, DataTypes) {

  var remedios_comenta_usuarios = sequelize.define('remedios_comenta_usuarios', {
    idcomentarios: DataTypes.INTEGER,
    remedios_nombre: DataTypes.STRING,
    usuario_idusuario: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarComentarios : function(v){ return sequelize
                  .query('select idcomentarios, remedios_nombre, idusuario, comentario, nombre as nombre_usuario, foto as foto_usuario from remedios_comenta_usuarios join usuarios on usuarios.idusuario=remedios_comenta_usuarios.usuario_idusuario where remedios_nombre=?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
  return remedios_comenta_usuarios

};  