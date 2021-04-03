import React from "react";
import { Icon } from "react-native-elements";
import {TouchableWithoutFeedback, View} from "react-native";

const PressableIcon = ({ color, name, size, onPress, ...args }) => (
  <View {...args}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon type='material-community' name={name} color={color} size={size} />
    </TouchableWithoutFeedback>
  </View>
)

export default PressableIcon;
