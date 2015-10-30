/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enfermedad', {
    nombre_enfermedad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
    
  });
};
