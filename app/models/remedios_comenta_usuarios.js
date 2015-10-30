/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remedios_comenta_usuarios', {
    idcomentarios: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    remedios_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};
