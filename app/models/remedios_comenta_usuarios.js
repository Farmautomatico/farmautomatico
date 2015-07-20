module.exports = function (sequelize, DataTypes) {

  var remedios_comenta_usuarios = sequelize.define('remedios_comenta_usuarios', {
    idcomentarios: {type: DataTypes.INTEGER, primaryKey: true, updatedAt: true, autoIncrement: true},
    remedios_nombre: DataTypes.STRING,
    usuario_idusuario: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarComentarios : function(v){ return sequelize
                  .query('select idcomentarios, remedios_nombre, idusuario, comentario, nombre as nombre_usuario, foto as foto_usuario from remedios_comenta_usuarios join usuarios on usuarios.idusuario=remedios_comenta_usuarios.usuario_idusuario where remedios_nombre=?',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  },
      ingresarUnComentario: function(remedio, userid, comment) {
                  return sequelize
                  .query('insert into remedios_comenta_usuarios (remedios_nombre, usuario_idusuario, comentario) values (?, ?, ?);', {  replacements: [remedio, userid, comment], raw: true , type: sequelize.QueryTypes.INSERT})
                },
      encontrarUnComentario: function( nombreRemedio, idComentario) { return sequelize
                      .query('select idcomentarios, remedios_nombre, idusuario, comentario, nombre as nombre_usuario, foto as foto_usuario from remedios_comenta_usuarios join usuarios on usuarios.idusuario=remedios_comenta_usuarios.usuario_idusuario where remedios_nombre=? && idcomentarios=?',
                        {replacements: [nombreRemedio, idComentario], type: sequelize.QueryTypes.SELECT})
                    },
      ModificarUnComentario: function (idComentario, comentarioNuevo) { return sequelize
                        .query ('update remedios_comenta_usuarios set comentario=? where idcomentarios=?;',
                        {replacements: [comentarioNuevo, idComentario], raw: true})
                      }
                /*
                  remedios_comenta_usuarios
                  .create({remedios_nombre: remedio,  usuario_idusuario: userid, comentario: comment})
                  .then(function() {
                    remedios_comenta_usuarios
                    .findOrCreate({where: {remedios_nombre: 'remedio', usuario_idusuario: userid}, defaults: {comentario: 'asdf'}})
                    console.log(user.get({
                      plain: true
                    }))
                    console.log(created)

                    */
                            /*
                            {
                              username: 'fnord',
                              job: 'omnomnom',
                              id: 2,
                              createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
                              updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
                            }
                            created: false
                          
                        })*/

    /*
      {
        username: 'sdepold',
        job: 'Technical Lead JavaScript',
        id: 1,
        createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
        updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
      }
      created: true
    */
                  /*
                  .build({ remedios_nombre: remedio,  usuario_idusuario: userid, comentario: comment })
                  .save()
                  .then(function(anotherTask) {
                    console.log(anotherTask);
                    // you can now access the currently saved task with the variable anotherTask... nice!
                  }).catch(function(error) {
                    console.log("EEEEEEEEERRRRRRRRRRRRROOOOOOOOOOOOOORRRRRRRRRRRR");
                    console.log(error);
                    // Ooops, do some error-handling
                  })*/
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;}); 
      
      }
  });
  return remedios_comenta_usuarios

};  