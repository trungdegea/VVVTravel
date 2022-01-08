import React, { useLayoutEffect } from "react";
import StripeCheckout from "react-native-stripe-checkout-webview";
import { STRIPE_PK } from "@env";
import http from "../../utilities/http";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackHandler } from "react-native";

const MyStripeCheckout = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Home",
          },
        ],
      });
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });

  return (
    <StripeCheckout
      stripePublicKey={STRIPE_PK}
      checkoutSessionInput={{
        sessionId: route.params.transaction,
      }}
      onSuccess={async ({ checkoutSessionId }) => {
        const transaction = checkoutSessionId.substring(69); // there is no way around in getting transaction id except from it 
        navigation.navigate("HomeStack", {
          screen: "Success",
        });
        await http.put("/orders/" + route.params.orderId, {
          transaction,
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
