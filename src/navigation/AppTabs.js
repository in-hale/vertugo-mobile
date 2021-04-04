import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeMap from "../features/map/components/HomeMap";
import PlaceView from "../features/map/components/PlaceView";
import Filters from "../features/map/components/Filters";
import LikedPlaces from "../features/map/components/LikedPlaces";
import SideMenu from "../features/map/components/SideMenu";
import { backgroundColor } from "../styles";
import LikeButton from "../features/map/components/LikeButton";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={SideMenu} >
      <Drawer.Screen name="Map" component={HomeMap} />
    </Drawer.Navigator>
  );
}

const AppTabs = ({ viewedPlaceName, viewedPlaceIsStarred }) => {
  return <Stack.Navigator screenOptions={{
    headerShown: true,
    gestureEnabled: true,
    headerStyle: {
      backgroundColor: backgroundColor
    }
  }}>
    <Stack.Screen name="HomeMap" component={DrawerNavigator} options={{
      headerShown: false
    }} />
    <Stack.Screen name="PlaceView" options={{
      headerTitle: viewedPlaceName,
      headerRight: () => <LikeButton active={viewedPlaceIsStarred} />,
      headerRightContainerStyle: {
        right: 14
      }
    }} component={PlaceView} />
    <Stack.Screen name="Filters" component={Filters} />
    <Stack.Screen name="Liked places" component={LikedPlaces} />
  </Stack.Navigator>
};

const mapStateToProps = state => ({
  viewedPlaceName: state.map.viewedPlace.name,
  viewedPlaceIsStarred: state.map.viewedPlace.isStarred
})

export default connect(mapStateToProps)(AppTabs);
