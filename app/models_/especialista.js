module.exports = function (sequelize, DataTypes) {

  var especialista = sequelize.define('especialista', {

	id_especialista: DataTypes.INTEGER,
	nombre_especialista: DataTypes.STRING,
	especialidad: DataTypes.STRING,
	email: DataTypes.STRING,
	direccion: DataTypes.STRING,
	telefono: DataTypes.INTEGER,
	contrasena: DataTypes.STRING,
	fotoData: DataTypes.STRING,
	comunas_idcomunas: DataTypes.INTEGER

  }, {

    classMethods:{
			encontrarEspecialistaTodos: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?)',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			},
			encontrarEspecialistaEspecialidad: function(ciudadpasada, enfermedad, edad, especialidad){ return sequelize
				  .query('select * from especialistas as e join telefonoespecialista as t on e.id_especialista = t.especialistas_id_especialista where e.comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?) and e.especialidad = ?',
				  { raw: true, replacements: [ciudadpasada, enfermedad, especialidad], type: sequelize.QueryTypes.SELECT })
			},
			
			encontrarEspecialidades: function(ciudadpasada, enfermedad, edad){ return sequelize
				  .query('select especialidad from especialistas as e where comunas_idcomunas= ? and e.id_especialista IN (select especialistas_id_especialista from enfermedades_tiene_especialistas where enfermedad_nombre_enfermedad= ?)',
				  { raw: true, replacements: [ciudadpasada, enfermedad], type: sequelize.QueryTypes.SELECT })
			}
			
    }

  });
	return especialista

};
