import {View, StyleSheet, Image} from 'react-native';
import React, {useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../components/GradientText';
import colors from '../../utils/constants/colors';
import {EvilIcons, Ionicons} from '@expo/vector-icons';

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
          <LinearGradient
            colors={[colors.BLUE, colors.RED]}
            style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo/logo2.png')}
              style={styles.white_logo}
            />
          </LinearGradient>

          <GradientText style={styles.coins}>1000</GradientText>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};
