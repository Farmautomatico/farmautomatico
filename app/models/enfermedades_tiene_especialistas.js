/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enfermedades_tiene_especialistas', {
    enfermedad_nombre_enfermedad: {
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
