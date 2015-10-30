/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especialista', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_especialista: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nombre_especialista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fotoData: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comunas_idcomunas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
