import React from "react";

//@libraries
import { NavigationContainer } from '@react-navigation/native';

//@route
import { AppRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
