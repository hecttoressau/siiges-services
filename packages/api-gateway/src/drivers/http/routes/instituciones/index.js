const { institucionesAdapter } = require('../../adapters');

const {
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
} = require('./schema');

async function institucionRouter(fastify, opts, next) {
  await fastify.get(
    '/',
    { schema: findAllInstitucionesSchema },
    institucionesAdapter.findAllInstituciones,
  );

  await fastify.get(
    '/:institucionId',
    {
      schema: findOneInstitucionSchema,
    },
    institucionesAdapter.findOneInstitucion,
  );

  await fastify.post(
    '/',
    {
      schema: createInstitucionSchema,
    },
    institucionesAdapter.createInstitucion,
  );

  await fastify.patch(
    '/:institucionId',
    {
      schema: updateInstitucionSchema,
    },
    institucionesAdapter.updateInstitucion,
  );

  await fastify.delete(
    '/:institucionId',
    {
      schema: deleteInstitucionSchema,
    },
    institucionesAdapter.deleteInstitucion,
  );

  await fastify.get(
    '/:institucionId/planteles',
    {
      schema: findPlantelesInstitucionSchema,
    },
    institucionesAdapter.findPlantelesInstitucion,
  );

  await fastify.get(
    '/:institucionId/planteles/:plantelId',
    {
      schema: findOnePlantelSchema,
    },
    institucionesAdapter.findOnePlantel,
  );

  await fastify.post(
    '/:institucionId/planteles',
    {
      schema: createPlantelSchema,
    },
    institucionesAdapter.createPlantel,
  );

  await fastify.patch(
    '/:institucionId/planteles/:plantelId',
    {
      schema: updatePlantelSchema,
    },
    institucionesAdapter.updatePlantel,
  );

  await fastify.delete(
    '/:institucionId/planteles/:plantelId',
    {
      schema: deletePlantelSchema,
    },
    institucionesAdapter.deletePlantel,
  );

  await fastify.post(
    '/:institucionId/ratificaciones',
    {
      schema: createRatificacionNombreSchema,
    },
    institucionesAdapter.createRatificacionNombre,
  );

  await fastify.patch(
    '/:institucionId/ratificaciones/:ratificacionId',
    {
      schema: updateRatificacionNombreSchema,
    },
    institucionesAdapter.updateRatificacionNombre,
  );

  await fastify.get(
    '/:institucionId/ratificaciones/:ratificacionId',
    {
      schema: findOneRatificacionNombreSchema,
    },
    institucionesAdapter.findOneRatificacionNombre,
  );

  await fastify.delete(
    '/:institucionId/ratificaciones/:ratificacionId',
    {
      schema: deleteRatificacionNombreSchema,
    },
    institucionesAdapter.deleteRatificacionNombre,
  );

  next();
}

module.exports = institucionRouter;
