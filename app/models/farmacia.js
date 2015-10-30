/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmacia', {
    nombre: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    turno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comunas_idcomunas: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    coordenada1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    coordenada2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hora_atencion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
