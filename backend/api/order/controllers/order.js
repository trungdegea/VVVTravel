"use strict";
const { sanitizeEntity, parseMultipartData } = require("strapi-utils");
const stripe = require("stripe")(process.env.STRIPE_SK || "sk_your_test_key");

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
    const { user } = ctx.state;
    const { items } = ctx.request.body;

    // validate products
    if (!items?.length) {
      return ctx.throw(400, "please choose at least one product");
    }
    const ids = items.map((item) => item.product);
    const query = { id_in: ids };
    const realProducts = await strapi.services.product.find(query);
    if (realProducts.length !== items.length) {
      return ctx.throw(404, "Some products in your order do not exist ");
    }

    // go for checking out process
    const requestedURL = ctx.request.headers.origin || "http://localhost:3000";

    const line_items = items.map((item, index) => {
      return {
        price_data: {
          currency: "vnd",
          product_data: {
            name: realProducts[index].name,
          },
          unit_amount: realProducts[index].price,
        },
        quantity: item.quantity,
      };
    });

    // create session
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: user.email,
        mode: "payment",
        // success_url: `${requestedURL}/success?session_id={CHECKOUT_SESSION_ID}`,
        // cancel_url: requestedURL,
        line_items,
      });

      const updatedItems = items.map((item) => ({
        ...item,
        status: "booking",
      }));

      const entity = await strapi.services.order.create({
        ...ctx.request.body,
        items: updatedItems,
        user: user.id,
        transaction: session.id,
      });

      return sanitizeEntity(entity, { model: strapi.models.order });
    } catch (err) {
      ctx.throw(500, "Unable to create session of checking out process");
    }
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
    const oldEntity = await strapi.services.order.findOne({
      id,
      user: user.id,
    });
    if (!oldEntity) {
      return ctx.throw(402, "could not update other order!!");
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

    const oldEntity = await strapi.services.order.findOne({
      id,
      user: user.id,
    });
    if (!oldEntity) {
      return ctx.throw(402, "could not delete other order!!");
    }

    const entity = await strapi.services.order.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },
};
