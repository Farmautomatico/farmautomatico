module.exports = function (sequelize, DataTypes) {

  var especialista = sequelize.define('especialista', {
	
	id_especialista: DataTypes.INTEGER,
	nombre_especialista: DataTypes.STRING,
	especialidad: DataTypes.STRING,
	email: DataTypes.STRING,
	direccion: DataTypes.STRING,
	telefono: DataTypes.INTEGER
	contraseña: DataTypes.STRING,
	fotoData: Types.STRING,
	comunas_idcomunas: DataTypes.INTEGER
	
  }, {
  
    classMethods:{
			encontrarEspecialistaTodos: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?)',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			},

			encontrarEspecialistaOdontologo: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?) and especialidad = odontologo',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			},

			encontrarEspecialistaKinesiologo: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?) and especialidad = kinesiologo',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			},

			encontrarEspecialistaCirujano: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?) and especialidad = cirujano',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			}
    }
	
  });
	return especialista

};

/*module.exports = function (sequelize, DataTypes) {

  var especialista = sequelize.define('farmacia', {
  }, {
    classMethods:    {

      encontrarEspecialidades: function(ciudadpasada){ return sequelize
                  .query('select * from farmacias where farmacia.comunas_idcomunas= ? and ?',
                    { raw: true, replacements: [ciudadpasada], type: sequelize.QueryTypes.SELECT })
                  },
      encontrarEspecialistas: function(ciudadpasada, enfermedad, edad){ return sequelize
                              .query('select * from farmacias where farmacia.comunas_idcomunas= ? and ?',
                                { raw: true, replacements: [edad, ciudadpasada], type: sequelize.QueryTypes.SELECT })
                              },
                  //('SELECT * FROM centrosmedicos where \'ciudad='+ciudad+'\'', { raw: true })
                 // .then(function(filas){console.log(filas); return filas;});

      }
  });
	return especialista

};
*/
