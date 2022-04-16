import {ViewStyle} from 'react-native';
import React, {FC, ReactChild} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/constants/colors';

interface GradientProps {
  children: ReactChild;
  style: ViewStyle;
}
const Gradient: FC<GradientProps> = ({children, style}) => {
  return (
    <LinearGradient
      colors={[colors.BLUE, colors.RED]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
