import React from "react";
import StripeCheckout from "react-native-stripe-checkout-webview";
import { STRIPE_PK } from "@env";

const MyStripeCheckout = ({ CHECKOUT_SESSION_ID }) => (
  <StripeCheckout
    stripePublicKey={STRIPE_PK}
    checkoutSessionInput={{
      sessionId:
        "test_session_id",
    }}
    onSuccess={({ checkoutSessionId }) => {
      console.log(
        `Stripe checkout session succeeded. session id: ${checkoutSessionId}.`
      );
    }}
    onCancel={() => {
      console.log(`Stripe checkout session cancelled.`);
    }}
  />
);

export default MyStripeCheckout;
