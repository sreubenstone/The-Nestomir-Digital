import React, { FC, useEffect } from "react";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useMutation } from "@apollo/react-hooks";
import { PUSH_TOKEN } from "../Other/queries";

const Push: FC = () => {
  const [savePushToken, { loading: mutationLoading, error: mutationError }] = useMutation(PUSH_TOKEN);

  useEffect(() => {
    (async () => {
      let token;
      if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Failed to get push token for push notification!");
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        savePushToken({ variables: { push_token: token } });
      } else {
        alert("Must use physical device for Push Notifications");
      }
    })();
  }, []);

  if (mutationError) {
    console.log(mutationError);
  }

  return null;
};

export default Push;
