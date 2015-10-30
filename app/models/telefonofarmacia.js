/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonofarmacia', {
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    farmacia_nombre: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  });
};
