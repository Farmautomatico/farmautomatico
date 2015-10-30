module.exports = function (sequelize, DataTypes) {

  var usuarios_comenta_remedio = sequelize.define('usuarios_comenta_remedio', {
    idcomentarios: {type: DataTypes.INTEGER, primaryKey: true, updatedAt: true, autoIncrement: true},
    remedios_nombre: DataTypes.STRING,
    usuario_idusuario: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  }, {
    classMethods:    {
      encontrarComentarios : function(v){ return sequelize
                  .query('select idcomentarios, remedios_nombre, idusuario, comentario, nombre as nombre_usuario, foto as foto_usuario from usuarios_comenta_remedio join usuarios on usuarios.idusuario=usuarios_comenta_remedio.usuario_idusuario where remedios_nombre=? order by fecha_comentario desc',
                    { replacements: [v], type: sequelize.QueryTypes.SELECT })
                  },
      ingresarUnComentario: function(remedio, userid, comment) {
                  return sequelize
                  .query('insert into usuarios_comenta_remedio (remedios_nombre, usuario_idusuario, comentario) values (?, ?, ?);', {  replacements: [remedio, userid, comment], raw: true , type: sequelize.QueryTypes.INSERT})
                },
      encontrarUnComentario: function( nombreRemedio, idComentario) { return sequelize
                      .query('select idcomentarios, remedios_nombre, idusuario, comentario, nombre as nombre_usuario, foto as foto_usuario from usuarios_comenta_remedio join usuarios on usuarios.idusuario=usuarios_comenta_remedio.usuario_idusuario where remedios_nombre=? && idcomentarios=?',
                        {replacements: [nombreRemedio, idComentario], type: sequelize.QueryTypes.SELECT})
                    },
      ModificarUnComentario: function (idComentario, comentarioNuevo) { return sequelize
                        .query ('update usuarios_comenta_remedio set comentario=? where idcomentarios=?;',
                        {replacements: [comentarioNuevo, idComentario], raw: true})
                      },
      EliminarUnComentario: function (idComentario) { return sequelize
                        .query('delete from usuarios_comenta_remedio where idcomentarios=?',
                          {replacements: [idComentario], raw: true})

                      }

                /*
                  usuarios_comenta_remedio
                  .create({remedios_nombre: remedio,  usuario_idusuario: userid, comentario: comment})
                  .then(function() {
                    usuarios_comenta_remedio
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
  return usuarios_comenta_remedio

};
