import React from 'react';
import PageView from "../../../../components/PageView";
import Logo from "../../../../components/Logo"
import {StyleSheet, View} from "react-native";

const Filters = () => {
  return (
    <PageView>
      <View style={styles.container}>
        <Logo />
      </View>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Filters;
