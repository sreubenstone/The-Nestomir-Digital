import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProgressContainer from "../components/Progress/ProgressContainer__";
import Profile from "../components/Profile__";
import Forum from "../components/Forum__";
import ChapterLoader from "../components/Book/ChapterLoader__";

const StoryStack = createStackNavigator({
  ProgressContainer: ProgressContainer,
  ChapterLoader: ChapterLoader
});

StoryStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  let routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "ChapterLoader") {
    tabBarVisible = true;
  }
  return {
    tabBarLabel: "Story",
    tabBarVisible
  };
};

const ProfileStack = createStackNavigator({
  Profile: Profile
});

const ForumStack = createStackNavigator({
  Forum: Forum
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Story: StoryStack,
      Forum: ForumStack,
      Notifs: ForumStack,
      Profile: ProfileStack
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
          if (routeName === "Notifs") {
            iconName = `ios-notifications`;
          }
          if (routeName === "Forum") {
            iconName = "ios-chatboxes";
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
