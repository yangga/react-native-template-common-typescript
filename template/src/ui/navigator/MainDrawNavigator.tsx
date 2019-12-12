import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import Sidebar from "components/SideBar";

import Home from "screens/HomeDraw";

const WIDTH = Dimensions.get("window").width;
export default createDrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    drawerWidth: WIDTH * 0.8,
    drawerPosition: "left",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
  }
);
