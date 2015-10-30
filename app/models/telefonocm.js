/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonocm', {
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CentrosMedicos_idCentrosMedicos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  });
};
