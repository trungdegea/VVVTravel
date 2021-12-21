'use strict';
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   * only return logged user's orders
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    const { user } = ctx.state;

    if (ctx.query._q) {
      entities = await strapi.services.order.search({
        ...ctx.query,
        user: user.id,
      });
    } else {
      entities = await strapi.services.order.find({
        ...ctx.query,
        user: user.id,
      });
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.order })
    );
  },

  /**
   * Retrieve a record.
   * only return logged user's orders
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.order.findOne({ id, user: user.id });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  /**
   * Count records.
   * only return the number of logged user's orders
   * @return {Number}
   */

  count(ctx) {
    const { user } = ctx.state;

    if (ctx.query._q) {
      return strapi.services.order.countSearch({ ...ctx.query, user: user.id });
    }
    return strapi.services.order.count({ ...ctx.query, user: user.id });
  },

  /**
   * Create a record.
   * only create the very first logged user's orders
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    const { user } = ctx.state;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.create(data, { files });
    } else {
      entity = await strapi.services.order.create({
        ...ctx.request.body,
        user: user.id,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  /**
   * Update a record.
   * only update the logged user's orders
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    let entity;
    const oldEntity = await strapi.services.order.findOne({ id, user: user.id });
    if (!oldEntity) {
      return { status: 402, message: "could not update other order!!" };
    }
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.order.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.order.update(
        { id },
        { ...ctx.request.body, user: user.id }
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  /**
   * Delete a record.
   * only delete the very first logged user's orders
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const oldEntity = await strapi.services.order.findOne({ id, user: user.id });
    if (!oldEntity) {
      return { status: 402, message: "could not delete other order!!" };
    }

    const entity = await strapi.services.order.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};
