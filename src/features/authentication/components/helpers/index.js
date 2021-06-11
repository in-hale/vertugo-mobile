import {
  KeyboardAvoidingView, Text, TextInput, View, Button as NativeButton,
} from 'react-native';
import React from 'react';
import Button from '../../../../components/Button';

export const AuthenticationView = ({ children }) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    }}
  >
    { children }
  </KeyboardAvoidingView>
);

export const AuthenticationInput = ({ ...args }) => (
  <TextInput
    style={{
      height: 60,
      fontSize: 20,
      textAlign: 'left',
    }}
    placeholderTextColor="#c7c7c7"
    autoCapitalize="none"
    autoCorrect={false}
    {...args}
  />
);

export const AuthenticationFooter = ({
  children, label, title, onPress,
}) => (
  <View style={{
    alignItems: 'flex-end',
  }}
  >
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
    >
      <Text>{ label }</Text>
      <NativeButton title={title} onPress={onPress} />
      {children}
    </View>
  </View>
);

export const AuthenticationButton = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} size={10} style={{}} />
);

export const AuthenticationErrors = ({ errors }) => (
  <View style={{
    paddingBottom: 15,
  }}
  >
    {errors.map((error, index) => (
      <Text
        key={index}
        style={{
          color: 'red',
        }}
      >
        { error }
      </Text>
    ))}
  </View>
);

export const AuthenticationPasswordInput = ({ ...args }) => (
  <AuthenticationInput secureTextEntry {...args} />
);
