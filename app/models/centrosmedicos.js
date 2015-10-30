/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centrosmedicos', {
    idCentrosMedicos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comunas_idcomunas: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    esPublico: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
};
