import {Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

export const AuthenticationView = ({ children }) => {
  return <KeyboardAvoidingView behavior='padding' style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  }}>
    { children }
  </KeyboardAvoidingView>
}

export const AuthenticationInput = ({ ...args }) => {
  return <TextInput style={{
    height: 60,
    fontSize: 20,
    textAlign: 'left'
  }} {...args} />
}

export const AuthenticationFooter = ({ children, label, title, onPress }) => {
  return <View style={{
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
}

export const AuthenticationButton = ({ title, onPress }) => {
  return <View style={{
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
}
