import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import StoryProgress from "../components/Story/StoryProgress__";
import Prologue from "../components/Book/Prologue";
import Chapter1 from "../components/Book/Chapter1";
import Chapter2 from "../components/Book/Chapter2";

const StoryStack = createStackNavigator({
  StoryProgress: StoryProgress,
  Prologue: Prologue,
  Chapter1: Chapter1,
  Chapter2: Chapter2
});

StoryStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  let routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "Prologue" || routeName == "Chapter2") {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: "Story",
    tabBarVisible
  };
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Story: StoryStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Story") {
            iconName = `ios-journal`;
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
