import React from 'react';
import { StyleSheet, View } from 'react-native';

import { backgroundColor } from "../../styles";

const PageView = ({ children, style }) => {
  return (
    <View style={{...styles.container, ...style}}>
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
