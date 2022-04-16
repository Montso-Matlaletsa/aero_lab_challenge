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

interface GradientButtonProps {
  style?: ViewStyle;
  label: string;
  secondLabel?: string;
  icon: ImageProps;
}

const GradientButton: FC<GradientButtonProps> = ({
  style,
  label,
  secondLabel,
  icon,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: 64,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        },
        label: {
          fontSize: 16,
          fontWeight: '600',
          lineHeight: 24,
          color: colors.WHITE,
          marginRight: 10,
          textTransform: 'uppercase',
        },
        buttonElementsContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        icon: {
          marginRight: 10,
        },
      }),
    [],
  );
  return (
    <TouchableOpacity style={style}>
      <Gradient style={styles.container}>
        <View style={styles.buttonElementsContainer}>
          <Text style={styles.label}>{label}</Text>
          {/* @ts-ignore */}
          <Image source={icon} style={styles.icon} />
          <Text style={styles.label}>{secondLabel}</Text>
        </View>
      </Gradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
