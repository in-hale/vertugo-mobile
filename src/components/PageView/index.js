import React from 'react';
import { StyleSheet, View } from 'react-native';

import { backgroundColor } from "../../styles";

const PageView = ({ children }) => {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});

export default PageView;
