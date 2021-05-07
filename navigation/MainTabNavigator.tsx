import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProgressEntry from "../components/Progress/ProgressEntry__";
import Profile from "../components/Profile/Profile__";
import Forum from "../components/Forum/Forum__";
import Thread from "../components/Forum/Thread";
import ChapterLoader from "../components/Book/ChapterLoader__";
import Support from "../components/Support/SupportEntry__";

const StoryStack = createStackNavigator({
  ProgressEntry,
  ChapterLoader,
});

StoryStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  let routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "ChapterLoader") {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: "Story",
    tabBarVisible,
  };
};

const ForumStack = createStackNavigator({
  Forum,
  Thread,
  Profile,
  Support,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Story: StoryStack,
      Forum: ForumStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Story") {
            iconName = `ios-journal`;
          }
          if (routeName === "Profile") {
            iconName = `ios-person`;
          }
          if (routeName === "Alerts") {
            iconName = `ios-notifications`;
          }
          if (routeName === "Forum") {
            iconName = "ios-chatbubble-ellipses";
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: "gray",
        inactiveTintColor: "gray",
      },
    }
  )
);
