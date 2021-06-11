import React from 'react';
import PressableIcon from '../../../../components/PressableIcon';

const LikeButton = ({ active, ...args }) => {
  const iconName = active ? 'heart' : 'heart-outline';

  return <PressableIcon {...args} color="red" size={30} name={iconName} />;
};

export default LikeButton;
