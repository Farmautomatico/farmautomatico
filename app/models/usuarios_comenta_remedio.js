/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_comenta_remedio', {
    idcomentarios: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    remedios_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_comentario: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};

