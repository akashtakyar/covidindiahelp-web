import React from "react";
import styled from "styled-components";
import { sessionManager } from "../../managers/sessionManager";
import Utility from "../../utility";
import { NotificationService } from "../../services";
import firebase from "firebase";
import { stateNamesConstant } from "../../constants";

const registerDevice = async (token, requestData) => {
  requestData["deviceType"] = "web";
  requestData["pushToken"] = token ? token : "";
  let [error, deviceResponse] = await Utility.parseResponse(
    NotificationService.registerDevice(requestData),
  );
  sessionManager.setDataInCookies("deviceId", deviceResponse.deviceId);
  if (deviceResponse && !error)
    Utility.apiSuccessToast(
      `You will receive latest information about ${
        requestData.selectedCategory
      } in ${stateNamesConstant[requestData.selectedState]}`,
    );
};

const registerForPush = async (requestData) => {
  const pushToken = await sessionManager.getDataFromCookies("pushToken");
  if (pushToken) {
    registerDevice(pushToken, requestData).catch((error) =>
      console.log("Device Registration Error! ", error),
    );
    return;
  }
  try {
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      process.env.REACT_APP_FIREBASE_WEB_PUSH_PUBLIC_KEY,
    );

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        messaging
          .getToken()
          .then((currentToken) => {
            sessionManager.setDataInCookies("pushToken", currentToken);
            if (currentToken)
              registerDevice(currentToken, requestData).catch((error) =>
                console.log("Device Registration Error! ", error),
              );
            else
              console.log(
                "No Instance ID token available. Request permission to generate one.",
              );
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
          });
      } else {
        console.log("Unable to get permission to notify.");
      }
    });
  } catch (e) {
    console.log("error handling in try catch", e);
  }
};

const PushAlert = styled.button`
  color: #ff0000;
  outline: none;
  border: none;
  background-color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  & img {
    margin: 5px;
  }
`;

const PushAlertComponent = (props) => {
  const { selectedCategory, selectedState } = props;

  const onAlertClicked = async () => {
    let deviceId = await sessionManager.getDataFromCookies("deviceId");
    const requestData = {
      criteriaCategory: selectedCategory.toUpperCase(),
      criteriaState: selectedState,
    };
    if (deviceId) {
      requestData.deviceId = deviceId;
      let [error, deviceResponse] = await Utility.parseResponse(
        NotificationService.updateDevice(requestData),
      );
      if (deviceResponse && !error)
        Utility.apiSuccessToast(
          `You will receive latest information about ${selectedCategory} in ${stateNamesConstant[selectedState]}`,
        );
    } else await registerForPush(requestData);
  };

  return (
    <PushAlert onClick={onAlertClicked}>
      <img src="/images/alert.svg" />
      Set Alert
    </PushAlert>
  );
};
export default PushAlertComponent;
