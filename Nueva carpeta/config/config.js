var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
 
//port:3000
var config = {
  development: {
    root: rootPath,
    app: {
      name: 'farma1'
    },
    port: 3000,
    db: 'jdbc:mysql://localhost:3306/mydb'
  },

  test: {
    root: rootPath,
    app: {
      name: 'farma1'
    },
    port: 3000,
    db: 'mysql://localhost/farma1-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'farma1'
    },
    port: 3000,
    db: 'mysql://localhost/farma1-production'
  }
};

module.exports = config[env];