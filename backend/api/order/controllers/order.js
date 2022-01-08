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
    const { host } = ctx.request.headers;
    const { user } = ctx.state;
    const { items, email, username } = ctx.request.body;

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
      const thumb = realProducts[index].images.length
        ? `http://${host}${realProducts[index].images[0].url}`
        : "https://via.placeholder.com/400x300.png";

      return {
        price_data: {
          currency: "vnd",
          product_data: {
            name: realProducts[index].name,
            images: [thumb]
          },
          unit_amount: realProducts[index].price,
        },
        quantity: item.quantity,
      };
    });

    const htmlItems = items.reduce((prev, curr, index) => {
      const htmlItem = `
        <tr>
          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;"> ${realProducts[index].name} (${curr.quantity}) </td>
          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;"> ${realProducts[index].price * curr.quantity} ₫ </td>
        </tr>
      `;

      return prev + htmlItem;
    }, "");

    const total = items.reduce((prev, curr, index) => {

      return prev + realProducts[index].price * curr.quantity;
    }, 0);

    // create session
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: `https://landing.tuanh6.repl.co/success?sc_checkout=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://landing.tuanh6.repl.co/?sc_checkout=cancel`,
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

      await strapi.plugins["email"].services.email.send({
        from: `"VVV Travel 👻" <${process.env.ADMIN_EMAIL}>`,
        to: email ? email : user.email,
        subject: "Checkout confirmation",
        text: " Thank You For Your Order!",
        html: `
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        @media screen and (max-width: 480px) {
            .mobile-hide {
                display: none !important;
            }

            .mobile-center {
                text-align: center !important;
            }
        }

        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>

<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                    <tr>
                        <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#ff7a00">
                            <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                    <tr>
                                        <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                            <img src="https://img.bayengage.com/assets/1641180761830-logo-strapi.png" alt="">
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;" class="mobile-hide">
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                <tr>
                                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;"> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="125" height="120" style="display: block; border: 0px;" /><br>
                                        <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;"> THANKS FOR YOUR ORDER! </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                        <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;"> We hope you have great trips. Stay safe, stay merry. </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> Order Confirmation # </td>
                                                <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> ${
                                                  entity.id
                                                } </td>
                                            </tr>
                                            <tr>
                                                <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> Customer </td>
                                                <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> ${
                                                  username
                                                    ? username
                                                    : user.username
                                                } </td>
                                            </tr>
                                            ${htmlItems}
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;"> TOTAL </td>
                                                <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;"> ${total} ₫ </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
        `,
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
    const { transaction } = ctx.request.body;

    const oldEntity = await strapi.services.order.findOne({
      id,
      user: user.id,
    });
    if (!oldEntity) {
      return ctx.throw(402, "could not update other order!!");
    }
    const session = await stripe.checkout.sessions.retrieve(transaction);
    if (session.payment_status === "paid"){
      const bookedItems = oldEntity.items.map((item) => ({
        ...item,
        status: "booked",
        product: item.product.id,
      }));
      const entity = await strapi.services.order.update(
        { id },
        { items: bookedItems, user: user.id, transaction }
      );
      return sanitizeEntity(entity, { model: strapi.models.order });
    } else {
      return ctx.throw(401, "Your order has been failed, please contact to customer care or checkout again!!");
    }

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
