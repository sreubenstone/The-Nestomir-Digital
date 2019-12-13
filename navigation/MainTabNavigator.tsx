import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Tracks from "../components/Tracks/Tracks";

const TrackStack = createStackNavigator({
  Tracks: Tracks
});

TrackStack.navigationOptions = {
  tabBarLabel: "My Tracks"
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Tracks: TrackStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Tracks") {
            iconName = `ios-git-pull-request`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: "gray",
        inactiveTintColor: "gray"
      }
    }
  )
);
