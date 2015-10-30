/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comunas', {
    idcomunas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regiones_idregiones: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
