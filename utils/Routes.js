import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../Screens/SettingScreen";
import CustomHeader from "./CustomHeader";

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: (props) => <CustomHeader {...props} />,
      },
    },
    Setting: { screen: SettingScreen },
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
      },
      headerTintColor: "#fff",
      animationEnabled: true,
    },
  }
);

export default Routes;
