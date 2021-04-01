import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMap from "../features/map/components/HomeMap";

const Stack = createStackNavigator();

const AppTabs = () => {
  return <Stack.Navigator headerMode='none' screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="HomeMap" component={HomeMap} />
  </Stack.Navigator>
}

export default AppTabs;
