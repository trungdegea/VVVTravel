import React from "react";
import StripeCheckout from "react-native-stripe-checkout-webview";
import { STRIPE_PK } from "@env";
import { useNavigation } from "@react-navigation/native";

const MyStripeCheckout = ({ CHECKOUT_SESSION_ID }) => {
  const navigation = useNavigation();
  return (
    <StripeCheckout
      stripePublicKey={STRIPE_PK}
      checkoutSessionInput={{
        sessionId: "",
      }}
      onSuccess={({ checkoutSessionId }) => {
        navigation.goBack();
      }}
      onCancel={() => {
        navigation.goBack();
      }}
    />
  );
};

export default MyStripeCheckout;
