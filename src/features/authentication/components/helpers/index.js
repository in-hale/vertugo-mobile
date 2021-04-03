import {Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

export const AuthenticationView = ({ children }) => (
  <KeyboardAvoidingView behavior='padding' style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  }}>
    { children }
  </KeyboardAvoidingView>
)

export const AuthenticationInput = ({ ...args }) => (
  <TextInput style={{
    height: 60,
    fontSize: 20,
    textAlign: 'left'
  }} placeholderTextColor='#c7c7c7' {...args} />
)

export const AuthenticationFooter = ({ children, label, title, onPress }) => (
  <View style={{
    alignItems: 'flex-end',
    width: '80%',
    alignSelf: 'center'
  }}>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Text>{ label }</Text>
      <Button title={title} onPress={onPress} />
      {children}
    </View>
  </View>
)

export const AuthenticationButton = ({ title, onPress }) => (
  <View style={{
    alignItems: 'center'
  }} >
    <TouchableOpacity onPress={onPress} style={{
      paddingVertical: 10,
      paddingHorizontal: 18,
      backgroundColor: 'green',
      borderRadius: 10,
      width: '80%',
    }} >
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 20
      }} >
        { title }
      </Text>
    </TouchableOpacity>
  </View>
)

export const AuthenticationError = ({ title }) => (
  <Text style={{
    color: 'red',
    paddingBottom: 15
  }}>
    { title }
  </Text>
)

export const AuthenticationPasswordInput = ({ ...args }) => (
  <AuthenticationInput secureTextEntry {...args} />
)
