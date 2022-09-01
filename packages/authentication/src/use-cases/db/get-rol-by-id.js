// External dependencies
const { notFound } = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('@siiges-services/core');
const { Logger } = require('@siiges-services/shared');

async function getRolAndDescriptionById(id) {
  const rol = await models.Rol.findOne({
    attributes: ['nombre', 'descripcion'],
    where: {
      id,
      deleted_at: { [Op.is]: null },
    },
  });
  if (rol) return rol.dataValues;

  Logger.error(`[auth/getUserByUsername]: Unable to find \
rol with id ${id} in our database`);
  throw notFound(`Unable to find rol with id ${id} in our database`);
}

module.exports = getRolAndDescriptionById;
