import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  ImageProps,
} from 'react-native';
import React, {FC, useMemo} from 'react';
import Gradient from '../Gradient/Gradient';
import colors from '../../utils/constants/colors';
import fonts from '../../utils/constants/fonts';

interface GradientButtonProps {
  style?: ViewStyle;
  label: string;
  secondLabel?: string;
  icon?: ImageProps;
  onPress?: () => void;
  height: number;
  textLabelStyle?: ViewStyle;
}

const GradientButton: FC<GradientButtonProps> = ({
  style,
  label,
  secondLabel,
  icon,
  onPress,
  height,
  textLabelStyle,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          borderRadius: 16,
          alignItems: 'center',
          width: '100%',
        },
        label: {
          fontSize: fonts.xs,
          fontWeight: '600',
          color: 'white',
        },
        buttonElementsContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        icon: {
          marginRight: 10,
          marginLeft: 10,
        },
        btnContainer: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [],
  );
  return (
    <TouchableOpacity
      style={[style, styles.btnContainer, {height}]}
      onPress={onPress}>
      <Gradient style={styles.container}>
        <View style={styles.buttonElementsContainer}>
          <Text style={[styles.label, textLabelStyle]}>{label}</Text>
          {/* @ts-ignore */}
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={styles.label}>{secondLabel}</Text>
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
