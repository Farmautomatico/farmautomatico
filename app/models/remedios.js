/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remedios', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    indicaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contraindicaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conservacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    interacciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    otrosdatos: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};

