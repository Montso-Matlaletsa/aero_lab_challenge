import {View, StyleSheet, ScrollView} from 'react-native';
import React, {
  ReactChild,
  ReactComponentElement,
  ReactFragment,
  ReactInstance,
  ReactNode,
  useMemo,
} from 'react';
import WalkThrough from '../../components/WalkThrough';
import MainPage from '../../components/MainPage';
type Page = {
  page: ReactChild;
  id: number;
};
export const Home = () => {
  const pages = [
    {
      page: MainPage,
      id: 1,
    },
    {
      page: WalkThrough,
      id: 2,
    },
  ];

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
    <ScrollView>
      <MainPage />
      <WalkThrough />
    </ScrollView>
  );
};
