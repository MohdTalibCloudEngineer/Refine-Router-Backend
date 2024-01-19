'use strict';

/**
 * file-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::file-post.file-post');
