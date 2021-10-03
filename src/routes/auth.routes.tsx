import React from "react";

//@libraries
import { createStackNavigator } from "@react-navigation/stack";

//@screens
import { Sign } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { theme } from "../styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={Sign} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
