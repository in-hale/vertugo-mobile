import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PageView from '../PageView';
import Logo from '../Logo';

const LogoScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1500);
  }, []);

  return (
    <PageView>
      <View style={styles.container}>
        <Logo />
      </View>
    </PageView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogoScreen;
