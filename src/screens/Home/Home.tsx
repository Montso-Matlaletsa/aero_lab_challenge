import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/GradientText';
import colors from '../../utils/constants/colors';
import Gradient from '../../components/Gradient';
import GradientButton from '../../components/GradientButton';

export const Home = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        topBar: {
          flexDirection: 'row',
          marginTop: 20,
        },
        logo: {
          resizeMode: 'contain',
          width: 40,
          height: 36,
        },
        aeroCoinContainer: {
          borderColor: '#8FA3BF',
          borderWidth: 1,
          width: 130,
          borderRadius: 30,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        },
        imageContainer: {
          flex: 1,
        },
        logoContainer: {
          borderRadius: 50,
          width: 25,
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
        },
        white_logo: {
          width: 15,
          height: 15,
        },
        coins: {
          fontSize: 15,
          marginLeft: 10,
        },
        img: {
          marginLeft: 15,
        },
        smallText: {
          textAlign: 'center',
          marginTop: 100,
          fontSize: 24,
          letterSpacing: 1,
          color: colors.GREY,
        },
        boldText: {
          fontSize: 96,
          fontWeight: '900',
          textAlign: 'center',
          lineHeight: 100,
        },
        describeText: {
          fontSize: 16,
          lineHeight: 24,
          textAlign: 'center',
          fontWeight: '600',
          color: colors.GREY,
          marginTop: 20,
        },
        btn: {
          position: 'absolute',
          bottom: 50,
          width: '100%',
        },
      }),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.aeroCoinContainer}>
          <Gradient style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo/logo2.png')}
              style={styles.white_logo}
            />
          </Gradient>

          <GradientText style={styles.coins}>1000</GradientText>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.img}
          />
        </View>
      </View>

      <Text style={styles.smallText}>EXPLORE THE</Text>
      <GradientText style={styles.boldText}>TECH</GradientText>
      <Text style={[styles.boldText, {color: colors.BLACK_TEXT}]}>ZONE</Text>
      <Text style={styles.describeText}>
        Here you’ll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </Text>

      <GradientButton
        style={styles.btn}
        label={'View All Products'}
        icon={require('../../assets/Vector2.png')}
      />
    </View>
  );
};
