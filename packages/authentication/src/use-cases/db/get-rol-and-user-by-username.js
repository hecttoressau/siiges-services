// External dependencies
const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const { models } = require('@siiges-services/core');
const { Logger } = require('@siiges-services/shared');

async function getRolAndUserByUsername(usuario) {
  const userJoinRol = await models.Usuario.findOne({
    where: {
      usuario,
      deleted_at: { [Op.is]: null },
    },
    include: models.Rol,
  });
  if (userJoinRol) return userJoinRol.dataValues;

  Logger.error(`[auth/getUserByUsername]: Unable to find \
username ${usuario} in our database`);
  throw boom.notFound(`Unable to find username ${usuario} in our database`);
}

module.exports = getRolAndUserByUsername;
