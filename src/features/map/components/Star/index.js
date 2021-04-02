import React from "react";
import { Icon } from "react-native-elements";
import {View} from "react-native";

const Star = ({ active, ...args }) => {
  const iconName = active ? 'star' : 'star-o'

  return <View {...args}>
    <Icon type='font-awesome' name={iconName} color='#f1c40f' size={30} />
  </View>
}

export default Star;
