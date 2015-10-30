/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regiones', {
    idregiones: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
