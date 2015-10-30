module.exports = function (sequelize, DataTypes) {

  var usuarios = sequelize.define('usuarios', {
    idusuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    foto: DataTypes.STRING,
    contrasena: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarUsuarios : function(){ return sequelize
                  .query('select * from usuarios',
                    { type: sequelize.QueryTypes.SELECT })
                  },
      insertarUsuario : function(nombre, foto, contrasena, email){ return sequelize
                  .query('insert into usuarios(nombre, foto, contrasena, email) values(?, ?, ?, ?)',
                    { replacements: [nombre, foto, contrasena, email], raw: true , type: sequelize.QueryTypes.INSERT })
                  }
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;});

      }
  });
  return usuarios

};
