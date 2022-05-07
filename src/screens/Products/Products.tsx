import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {safearea} from '../../utils/constants/canstants';
import fonts from '../../utils/constants/fonts';
import GradientText from '../../components/GradientText';
import colors from '../../utils/constants/colors';
import SelectDropdown from 'react-native-select-dropdown';
import {Ionicons} from '@expo/vector-icons';
import DropDown from '../../components/DropDown';

const Products = () => {
  const dropdownItems = ['All Products', 'Electronics', 'Phones', 'Computers'];

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
        },
        title: {
          textAlign: 'center',
          fontSize: fonts.lg,
          fontWeight: '900',
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginHorizontal: 5,
        },
        titleContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [safearea],
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <GradientText style={styles.title}>Tech</GradientText>
        <Text style={[styles.title, {color: colors.BLACK_TEXT}]}>Products</Text>
      </View>

      <DropDown data={dropdownItems} />
    </View>
  );
};

export default Products;
