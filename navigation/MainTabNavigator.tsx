import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import test from "../components/Tracks/Tracks";
import TabBarIcon from "./TabBarIcon";

const TrackStack = createStackNavigator(
  {
    Experiments: test
  },
  {
    initialRouteName: "test"
  }
);

TrackStack.navigationOptions = {
  tabBarLabel: "Tracks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-flask" : "md-globe"}
    />
  )
};

export default createBottomTabNavigator({
  TrackStack
});
