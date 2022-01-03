import React from "react";
import StripeCheckout from "react-native-stripe-checkout-webview";
import { STRIPE_PK } from "@env";
import http from "../../utilities/http";

import { useNavigation, useRoute } from "@react-navigation/native";

const MyStripeCheckout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <StripeCheckout
      stripePublicKey={STRIPE_PK}
      checkoutSessionInput={{
        sessionId: route.params.transaction,
      }}
      onSuccess={async ({ checkoutSessionId }) => {
        await http.put("/orders/" + route.params.orderId, {
          transaction: checkoutSessionId,
        });
        navigation.navigate("HomeStack", {
          screen: "Success",
        });
      }}
      onCancel={() => {
        navigation.navigate("HomeStack", {
          screen: "Failed",
        });
      }}
    />
  );
};

export default MyStripeCheckout;
