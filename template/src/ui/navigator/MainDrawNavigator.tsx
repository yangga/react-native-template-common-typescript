import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import Sidebar from "components/SideBar";
import drawHoc, {
  SampleHeaderLeft,
  SampleHeaderCenter,
  SampleHeaderRight
} from "components/DrawHoc";

import HomeContent from "screens/Home";

const Home = drawHoc({
  headerLeft: <SampleHeaderLeft />,
  headerCenter: <SampleHeaderCenter />,
  headerRight: <SampleHeaderRight />,
  content: <HomeContent />
});

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
