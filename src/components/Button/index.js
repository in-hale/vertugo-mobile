import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({
  title, onPress, size = 10, style,
}) => {
  const BASE_FONT_SIZE = 1.7;
  const BASE_PADDING_V = 1;
  const BASE_PADDING_H = 1.8;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        paddingVertical: BASE_PADDING_V * size,
        paddingHorizontal: BASE_PADDING_H * size,
        ...style,
      }}
    >
      <Text style={{
        ...styles.text,
        fontSize: BASE_FONT_SIZE * size,
      }}
      >
        { title }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999999',
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
