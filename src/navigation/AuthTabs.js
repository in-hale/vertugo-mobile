import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../features/authentication/components/SignIn';
import SignUp from '../features/authentication/components/SignUp';
import LogoScreen from '../components/LogoScreen';

const Stack = createStackNavigator();

const AuthTabs = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <Stack.Screen name="LogoScreen" component={LogoScreen} />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default AuthTabs;
