import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";

import LogoScreen from "../components/LogoScreen";
import PageView from "../components/PageView";
import Logo from "../components/Logo";



const Stack = createStackNavigator();

const AuthenticationInput = ({ ...args }) => {
  return <TextInput style={{
    height: 60,
    fontSize: 20,
    textAlign: 'left'
  }} {...args} />
}

const AuthenticationFooter = ({ children }) => {
  return <View style={af_styles.container}>
    {children}
  </View>
}

const af_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})

const SignIn = ({ navigation }) => {
  return (
    <PageView>
      <KeyboardAvoidingView behavior='padding' style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Logo />
        <View style={{
          width: '80%'
        }}>
          <AuthenticationInput placeholder="Login" />
          <AuthenticationInput placeholder="Password" />
          <AuthenticationFooter>
            <Text>Kek</Text>
            <Button title='Sign up' onPress={() => {navigation.navigate('SignUp')}} />
          </AuthenticationFooter>
        </View>
      </KeyboardAvoidingView>
    </PageView>
  );
}

const SignUp = ({ navigation }) => {
  const [text, setText] = useState('');

  return (
    <PageView>
      <KeyboardAvoidingView behavior='padding' style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View>
        <Logo />
        <View style={{
          width: '80%'
        }}>
          <AuthenticationInput placeholder="Login" />
          <AuthenticationInput placeholder="Email" />
          <AuthenticationInput placeholder="Password" />
          <AuthenticationInput placeholder="Repeat password" />
        </View>
        <Button title='Sign in' onPress={() => {navigation.navigate('SignIn')}} />
        </View>
      </KeyboardAvoidingView>
    </PageView>
  );
}


export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign in' headerMode='none'>
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};