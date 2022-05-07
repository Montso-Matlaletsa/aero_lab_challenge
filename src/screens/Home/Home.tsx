import {ScrollView} from 'react-native';
import React from 'react';
import WalkThrough from '../../components/WalkThrough';
import MainPage from '../../components/MainPage';
import {ReactNode} from 'react';
import {Component} from 'react';

interface homePages {
  component: ReactNode;
}

export const Home = () => {
  const pages = [MainPage, WalkThrough];

  return (
    <ScrollView
      scrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
      pagingEnabled>
      {pages.map(Page => (
        <Page />
      ))}
    </ScrollView>
  );
};
