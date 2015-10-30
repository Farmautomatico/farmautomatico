/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonoespecialista', {
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    especialistas_id_especialista: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  });
};
