import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Loading from "screens/Loading";

/** You can choose main frame here **/
import Main from "./MainDrawNavigator";
// import Main from "./MainStackNavigator";
// import Main from "./MainTabbarNavigator";

const AppNavigator = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    Main: { screen: Main }
  },
  {
    initialRouteName: "Loading"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
