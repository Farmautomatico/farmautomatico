var db = require('../models');

exports.consultas = {
  buscarNombreEnfermedades : db.enfermedad.findAll({
    attributes: ['nombre_enfermedad']
  }),
  buscarComunas : db.comunas.findAll({
    order: [
      ['regiones_idregiones', 'ASC'],
      ['nombre', 'ASC']
    ]
  }),
  buscarRegiones : db.regiones.findAll(),
  buscarRemedios : db.remedios.findAll({
    attributes: ['nombre']
  })
}
