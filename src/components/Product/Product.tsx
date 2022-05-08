import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useMemo} from 'react';
import {safearea} from '../../utils/constants/canstants';
import colors from '../../utils/constants/colors';
import {Image} from 'react-native';
import fonts from '../../utils/constants/fonts';
import {Product as product} from '../../@types/types';
import {FC} from 'react';
interface IProduct {
  product: product;
}
const Product: FC<IProduct> = ({product}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: 500,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.NEUTRAL,
          backgroundColor: colors.WHITE,
        },
        imageStyle: {
          marginTop: 70,
          width: 280,
          height: 204,
          alignSelf: 'center',
          marginLeft: 30,
          marginRight: 30,
        },
        productDescription: {
          height: 90,
          borderTopColor: colors.NEUTRAL,
          borderTopWidth: 1,
          bottom: 0,
          padding: 24,
          position: 'absolute',
          width: '100%',
        },
        productName: {
          fontSize: fonts.md,
          lineHeight: 24,
          fontWeight: '600',
          flexGrow: 0,
          margin: 0,
        },
        productCategory: {
          fontWeight: '600',
          lineHeight: 24,
          fontSize: fonts.xs,
          color: colors.GREY,
          textTransform: 'uppercase',
          margin: 0,
        },
      }),
    [safearea],
  );
  return (
    <View style={styles.container}>
      <Image source={{uri: product.img.url}} style={styles.imageStyle} />
      <View style={styles.productDescription}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
      </View>
    </View>
  );
};

export default Product;
