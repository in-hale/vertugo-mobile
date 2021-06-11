import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../Icon';

const PressableIcon = ({
  color, name, size, onPress, ...args
}) => (
  <View {...args}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name={name} color={color} size={size} />
    </TouchableWithoutFeedback>
  </View>
);

export default PressableIcon;
