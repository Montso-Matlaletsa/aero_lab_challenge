import React from 'react';
import {Text, TextProps} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/constants/colors';

const GradientText = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Text> &
    Readonly<TextProps> &
    Readonly<{children?: React.ReactNode}>,
) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[colors.BLUE, colors.RED]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
