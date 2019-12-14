import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Button, Text } from "native-base";

import Home from "screens/Home";

export default createStackNavigator(
  {
    Home1: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Home1",
        headerRight: (
          <Button transparent onPress={() => navigation.navigate("Home2")}>
            <Text style={{ color: "#007bfc" }}>Go Home2</Text>
          </Button>
        )
      })
    },
    Home2: { screen: Home }
  },
  {
    initialRouteName: "Home1"
  }
);
