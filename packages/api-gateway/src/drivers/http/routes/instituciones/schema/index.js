const findAllInstitucionesSchema = require('./find-all.instituciones.schema');
const findOneInstitucionSchema = require('./find-one.instituciones.schema');
const findPlantelesInstitucionSchema = require('./find.planteles-institucion.schema');
const findOnePlantelSchema = require('./find-one.plantel.schema');
const createInstitucionSchema = require('./create.intitucion.schema');
const createPlantelSchema = require('./create.plantel.schema');
const updateInstitucionSchema = require('./update.institucion.schema');
const updatePlantelSchema = require('./update.plantel.schema');
const deleteInstitucionSchema = require('./delete.institucion.schema');
const deletePlantelSchema = require('./delete.plantel.schema');
const findOneRatificacionNombreSchema = require('./find-one.ratificacion-nombre.schema');
const createRatificacionNombreSchema = require('./create.ratificacion-nombre.schema');
const updateRatificacionNombreSchema = require('./update.ratificacion-nombre.schema');
const deleteRatificacionNombreSchema = require('./delete.ratificacion-nombre.schema');

module.exports = {
  findAllInstitucionesSchema,
  findOneInstitucionSchema,
  findPlantelesInstitucionSchema,
  findOnePlantelSchema,
  createInstitucionSchema,
  createPlantelSchema,
  updateInstitucionSchema,
  updatePlantelSchema,
  deleteInstitucionSchema,
  deletePlantelSchema,
  findOneRatificacionNombreSchema,
  createRatificacionNombreSchema,
  updateRatificacionNombreSchema,
  deleteRatificacionNombreSchema,
};
