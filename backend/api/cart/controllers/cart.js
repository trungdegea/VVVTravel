"use strict";
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   * only return logged user's carts
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    const { user } = ctx.state;

    if (ctx.query._q) {
      entities = await strapi.services.cart.search({
        ...ctx.query,
        user: user.id,
      });
    } else {
      entities = await strapi.services.cart.find({
        ...ctx.query,
        user: user.id,
      });
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.cart })
    );
  },

  /**
   * Retrieve a record.
   * only return logged user's carts
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.cart.findOne({ id, user: user.id });
    return sanitizeEntity(entity, { model: strapi.models.cart });
  },

  /**
   * Count records.
   * only return the number of logged user's carts
   * @return {Number}
   */

  count(ctx) {
    const { user } = ctx.state;

    if (ctx.query._q) {
      return strapi.services.cart.countSearch({ ...ctx.query, user: user.id });
    }
    return strapi.services.cart.count({ ...ctx.query, user: user.id });
  },

  /**
   * Create a record.
   * only create the very first logged user's carts
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    const { user } = ctx.state;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.cart.create(data, { files });
    } else {
      entity = await strapi.services.cart.create({
        ...ctx.request.body,
        user: user.id,
      });
    }
    return sanitizeEntity(entity, { model: strapi.models.cart });
  },

  /**
   * Update a record.
   * only update the logged user's carts
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    let entity;
    const oldEntity = await strapi.services.cart.findOne({ id, user: user.id });
    if (!oldEntity) {
      return ctx.throw(402, "could not update other cart!!");
    }
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.cart.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.cart.update(
        { id },
        { ...ctx.request.body, user: user.id }
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.cart });
  },

  /**
   * Delete a record.
   * only delete the very first logged user's carts
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const oldEntity = await strapi.services.cart.findOne({ id, user: user.id });
    if (!oldEntity) {
      return ctx.throw(402, "could not delete other cart!!");
    }

    const entity = await strapi.services.cart.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.cart });
  },
};
