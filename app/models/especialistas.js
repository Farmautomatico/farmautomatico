/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especialistas', {
    id_especialista: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre_especialista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comunas_idcomunas: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
