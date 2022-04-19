import {StyleSheet, ScrollView} from 'react-native';
import React, {ReactChild, useCallback, useMemo} from 'react';
import WalkThrough from '../../components/WalkThrough';
import MainPage from '../../components/MainPage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigation, RootStackParams} from '../../@types/types';

export const Home = () => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<RootNavigation, RootStackParams.HOME>
    >();

  const RouteToProducts = useCallback(
    () => navigate(RootStackParams.PRODUCTS),
    [navigate],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
      }),
    [],
  );
  return (
    <ScrollView
      scrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}>
      <MainPage />
      <WalkThrough />
    </ScrollView>
  );
};
