import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import colors from '../../utils/constants/colors';
import fonts from '../../utils/constants/fonts';
import Gradient from '../Gradient';
import GradientButton from '../GradientButton';
import GradientText from '../GradientText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigation} from '../../@types/types';
import {RootStackParams} from '../../utils/constants/enums';
import {PAGE_HEIGHT, safearea} from '../../utils/constants/canstants';
import useApp from '../../context/AppContext/hook';
import {useEffect} from 'react';
import {useState} from 'react';
import {User} from '../../context/AppContext/types';

const MainPage = () => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<RootNavigation, RootStackParams.HOME>
    >();

  const RouteToProducts = useCallback(
    () => navigate(RootStackParams.PRODUCTS),
    [navigate],
  );
  const {user, onGetUser} = useApp();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        page1: {
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 40,

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
          fontSize: fonts.xs,
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
          width: '100%',
          marginTop: 100,
          bottom: 0,
          height: 64,
        },
        textLabelStyle: {
          textTransform: 'uppercase',
        },
      }),
    [safearea],
  );

  return (
    <View style={styles.page1}>
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

          <GradientText style={styles.coins}>{user?.points}</GradientText>
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
        onPress={RouteToProducts}
        height={50}
        //@ts-ignore
        textLabelStyle={styles.textLabelStyle}
      />
    </View>
  );
};

export default MainPage;
