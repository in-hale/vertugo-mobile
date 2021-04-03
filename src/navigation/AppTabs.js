import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMap from "../features/map/components/HomeMap";
import PlaceView from "../features/map/components/PlaceView";

const Stack = createStackNavigator();

const AppTabs = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="HomeMap" component={HomeMap} />
    <Stack.Screen name="PlaceView" component={PlaceView} options={{
      headerShown: true,
      gestureEnabled: true
    }} />
  </Stack.Navigator>
}

export default AppTabs;
