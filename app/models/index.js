var fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  config = require('../../config/config'),
  db = {};

//db, user, pw
var sequelize = new Sequelize('farmautomatico', 'farmautomatico', 'farmautomatico', {
  host: 'localhost',
  dialect: 'mysql',
  autoIncrement: true,
  pool: {
    max: 50,
    min: 0,
    idle: 10
  },
  define: {
        timestamps: false,
        freezeTableName: true
  }

});
/*
var sequelize = new Sequelize(config.db, "root", "", {
  storage: config.storage
});*/

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;

  //var controllers = sequelize['import'](path.join(__dirname, file));
});

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.remedios.hasMany(db.usuarios_comenta_remedio, {foreignKey: 'nombre'});
db.usuarios_comenta_remedio.belongsTo(db.remedios, {foreignKey: 'remedios_nombre'});

db.usuarios.hasMany(db.usuarios_comenta_remedio, {foreignKey: 'idusuario'});
db.usuarios_comenta_remedio.belongsTo(db.usuarios, {foreignKey: 'usuario_idusuario'});


module.exports = db;
