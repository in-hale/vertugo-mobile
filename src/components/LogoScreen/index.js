import React, { useEffect } from 'react';
import PageView from "../PageView";
import Logo from "../Logo"
import {StyleSheet, View} from "react-native";

const LogoScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn')
    }, 2000)
  }, [])

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
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LogoScreen;
