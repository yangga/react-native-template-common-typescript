import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const tabBarIcon = (name: string) => ({ tintColor }: { tintColor: string }) => (
  <MaterialIcons
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={24}
  />
);

import Home from "screens/HomeTabbar";

export default createMaterialBottomTabNavigator(
  {
    Home1: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
        tabBarIcon: tabBarIcon("home")
      })
    },
    Home2: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
        tabBarIcon: tabBarIcon("home")
      })
    },
    Home3: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
        tabBarIcon: tabBarIcon("home")
      })
    }
  },
  {
    initialRouteName: "Home1",
    shifting: true,
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);
