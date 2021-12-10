'use strict';
// const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  // async find(ctx) {
  //   let entities;
  //   if (ctx.query._q) {
  //     entities = await strapi.services.cart.search(ctx.query);
  //   } else {
  //     entities = await strapi.services.cart.find(ctx.query);
  //   }

  //   return entities.map((entity) => {
  //     if (Array.isArray(entity["items"])){
  //       entity["items"].forEach(item => {
  //         if ("product" in item){
  //           const proID = item["product"];
  //           item["product"] = strapi.services.product.findOne({});
  //         }
  //       });
  //     }
  //     return sanitizeEntity(entity, { model: strapi.models.cart });
  //   });
  // },
};
