"use strict";
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   * only return logged user's comments
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    const { user } = ctx.state;

    if (ctx.query._q) {
      entities = await strapi.services.comment.search({
        ...ctx.query,
        user: user.id,
      });
    } else {
      entities = await strapi.services.comment.find({
        ...ctx.query,
        user: user.id,
      });
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.comment })
    );
  },

  /**
   * Retrieve a record.
   * only return logged user's comments
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.comment.findOne({ id, user: user.id });
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },

  /**
   * Count records.
   * only return the number of logged user's comments
   * @return {Number}
   */

  count(ctx) {
    const { user } = ctx.state;

    if (ctx.query._q) {
      return strapi.services.comment.countSearch({ ...ctx.query, user: user.id });
    }
    return strapi.services.comment.count({ ...ctx.query, user: user.id });
  },

  /**
   * Create a record.
   * only create the very first logged user's comments
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    const { user } = ctx.state;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.comment.create(data, { files });
    } else {
      entity = await strapi.services.comment.create({
        ...ctx.request.body,
        user: user.id,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },

  /**
   * Update a record.
   * only update the logged user's comments
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    let entity;
    const oldEntity = await strapi.services.comment.findOne({
      id,
      user: user.id,
    });
    if (!oldEntity) {
      return { status: 402, message: "could not update other comment!!" };
    }
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.comment.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.comment.update(
        { id },
        { ...ctx.request.body, user: user.id }
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.comment });
  },

  /**
   * Delete a record.
   * only delete the very first logged user's comments
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const oldEntity = await strapi.services.comment.findOne({
      id,
      user: user.id,
    });
    if (!oldEntity) {
      return { status: 402, message: "could not delete other comment!!" };
    }

    const entity = await strapi.services.comment.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};
