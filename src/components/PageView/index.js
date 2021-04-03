import React from 'react';
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

const PageView = ({ children }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6'
  }
});

export default PageView;
