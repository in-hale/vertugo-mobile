import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogoScreen from "../components/LogoScreen";
import SignUp from "../features/authentication/components/SignUp";
import SignIn from "../features/authentication/components/SignIn";

const Stack = createStackNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          animationEnabled: false
        }} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
