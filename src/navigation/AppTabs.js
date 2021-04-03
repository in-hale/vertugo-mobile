import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeMap from "../features/map/components/HomeMap";
import PlaceView from "../features/map/components/PlaceView";
import Filters from "../features/map/components/Filters";
import LikedPlaces from "../features/map/components/LikedPlaces";
import SideMenu from "../features/map/components/SideMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={SideMenu} >
      <Drawer.Screen name="Map" component={HomeMap} />
    </Drawer.Navigator>
  );
}

const AppTabs = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: true,
    gestureEnabled: true
  }}>
    <Stack.Screen name="HomeMap" component={DrawerNavigator} options={{
      headerShown: false
    }} />
    <Stack.Screen name="PlaceView" component={PlaceView} />
    <Stack.Screen name="Filters" component={Filters} />
    <Stack.Screen name="Liked places" component={LikedPlaces} />
  </Stack.Navigator>
}

export default AppTabs;
