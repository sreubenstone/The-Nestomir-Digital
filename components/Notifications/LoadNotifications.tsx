import React, { FC, useEffect } from "react";
import { AppState, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_NOTIFICATIONS } from "../Other/queries";
import ProgressEntry from "../Progress/ProgressEntry__";
import ChapterLoader from "../Book/ChapterLoader__";
import Profile from "../Profile/Profile__";
import Forum from "../Forum/Forum__";
import Thread from "../Forum/Thread__";
import Support from "../Support/SupportEntry__";
import FullGlossaryIndex from "../Glossary/main/GlossaryEntry__";
import GlossaryDetail from "../Glossary/main/GlossaryDetail__";
import { Ionicons } from "@expo/vector-icons";

interface IProps {}

const StoryStack = createNativeStackNavigator();

function StoryStackScreen() {
  return (
    <StoryStack.Navigator>
      <StoryStack.Screen name="ProgressEntry" options={{ headerShown: false }} component={ProgressEntry} />
      <StoryStack.Screen name="ChapterLoader" options={{ headerShown: false }} component={ChapterLoader} />
      <StoryStack.Screen name="Profile_Profile" options={{ headerShown: false }} component={Profile} />
      <StoryStack.Screen name="Support" component={Support} />
    </StoryStack.Navigator>
  );
}

const ForumStack = createNativeStackNavigator();

function ForumStackScreen() {
  return (
    <ForumStack.Navigator>
      <ForumStack.Screen name="Forum_main" options={{ headerShown: false }} component={Forum} />
      <ForumStack.Screen name="Thread" component={Thread} />
      <ForumStack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
    </ForumStack.Navigator>
  );
}

const GlossaryStack = createNativeStackNavigator();

function GlossaryStackScreen() {
  return (
    <GlossaryStack.Navigator>
      <GlossaryStack.Screen name="FullGlossaryIndex" options={{ headerShown: false }} component={FullGlossaryIndex} />
      <GlossaryStack.Screen name="GlossaryDetail" options={({ route }) => ({ title: route.params.glossary_element })} component={GlossaryDetail} />
    </GlossaryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Entry: FC<IProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_MY_NOTIFICATIONS);

  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      refetch();
    }
  };
  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  const filter = data.getMyNotifications.filter((item) => {
    return !item.read;
  });

  const badgeCount = filter.length;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Story") {
              iconName = "ios-journal";
            } else if (route.name === "Forum") {
              iconName = "ios-chatbubble-ellipses";
            } else if (route.name === "Glossary") {
              iconName = "ios-planet-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#b1b4da",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Story" options={{ headerShown: false }} component={StoryStackScreen} />
        <Tab.Screen name="Forum" options={{ headerShown: false, tabBarBadge: !badgeCount ? null : badgeCount }} component={ForumStackScreen} />
        <Tab.Screen name="Glossary" options={{ headerShown: false }} component={GlossaryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Entry;
