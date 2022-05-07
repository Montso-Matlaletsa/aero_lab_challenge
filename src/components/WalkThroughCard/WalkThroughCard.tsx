import {View, Text, Image, StyleSheet, ImageProps} from 'react-native';
import React, {FC, useMemo} from 'react';
import colors from '../../utils/constants/colors';
import fonts from '../../utils/constants/fonts';
import Gradient from '../Gradient';
import GradientText from '../GradientText';
import {safearea} from '../../utils/constants/canstants';

export type WalkThrough = {
  id: number;
  title: string;
  image: ImageProps;
  description: string;
};

interface CardProps {
  walkThrough: WalkThrough;
}

const WalkThroughCard: FC<CardProps> = ({walkThrough}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        card: {
          backgroundColor: 'white',
          height: 408,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 32,
          bottom: 45,
          width: 335,
          alignSelf: 'center',
          opacity: 1,
          marginVertical: 20,
        },
        containContent: {
          width: '90%',
          backgroundColor: 'white',
          height: '90%',
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 10,
        },
        walkthroughImg: {
          width: '100%',
          height: 200,
          alignSelf: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        labelContainer: {
          flexDirection: 'row',
          padding: 20,
        },
        logoContainer: {
          height: 40,
          width: 40,
          backgroundColor: colors.GREY,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: fonts.lg,
          fontWeight: '900',
          marginLeft: 20,
          textTransform: 'uppercase',
        },
        description: {
          color: colors.GREY,
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: 'center',
          fontSize: fonts.xs,
          fontWeight: '600',
        },
      }),
    [safearea],
  );

  return (
    <View style={styles.card}>
      <View style={styles.containContent}>
        <Gradient style={styles.walkthroughImg}>
          {/* @ts-ignore */}
          <Image source={walkThrough.image} style={styles.walkthroughImg} />
        </Gradient>
        <View style={styles.labelContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/Vector3.png')}
              resizeMode={'contain'}
            />
          </View>
          <GradientText style={styles.title}>{walkThrough.title}</GradientText>
        </View>
        <Text style={styles.description}>{walkThrough.description}</Text>
      </View>
    </View>
  );
};

export default WalkThroughCard;
