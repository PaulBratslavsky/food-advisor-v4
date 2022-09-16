'use strict';

/**
 * universal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::universal.universal');