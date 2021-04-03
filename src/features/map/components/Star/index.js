import React from "react";
import { Icon } from "react-native-elements";
import {TouchableWithoutFeedback, View} from "react-native";

const Star = ({ active, onPress, ...args }) => {
  const iconName = active ? 'heart' : 'heart-outline'

  return <TouchableWithoutFeedback onPress={onPress}>
    <View {...args}>
      <Icon type='material-community' name={iconName} color='red' size={30} />
    </View>
  </TouchableWithoutFeedback>
}

export default Star;
