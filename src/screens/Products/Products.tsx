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
import {ScrollView} from 'react-native';
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import GradientButton from '../../components/GradientButton';
import {FlatList} from 'react-native';
import {mockProducts} from '../../@types/types';
import {Fragment} from 'react';
import useApp from '../../context/AppContext/hook';
import {useEffect} from 'react';

const Products = () => {
  const dropdownItems = ['All Products', 'Electronics', 'Phones', 'Computers'];
  const filters = ['Most recent', 'Lowest Price', 'Highest Price'];
  const {products} = useApp();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: colors.WHITE,
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
        scrollStyle: {
          flexGrow: 0,
          marginBottom: 40,
        },
        redeemButton: {
          marginTop: 20,
          marginBottom: 30,
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

      <View>
        <ScrollView
          horizontal
          style={styles.scrollStyle}
          showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => (
            <Filter index={index} text={filter} />
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Fragment>
            <Product product={item} />
            <GradientButton
              label={'Redeem for'}
              height={64}
              icon={require('../../assets/logo/logo2.png')}
              secondLabel={item.cost.toString()}
              style={styles.redeemButton}
            />
          </Fragment>
        )}
      />
    </View>
  );
};

export default Products;
