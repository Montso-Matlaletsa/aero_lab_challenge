import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Gradient from '../Gradient';
import {useMemo} from 'react';
import {safearea} from '../../utils/constants/canstants';
import fonts from '../../utils/constants/fonts';
import GradientText from '../GradientText';
import colors from '../../utils/constants/colors';
import GradientButton from '../GradientButton';
import {Pressable} from 'react-native';
import {Fragment} from 'react';

interface IFilterProps {
  index: number;
  text: string;
}
const Filter: React.FC<IFilterProps> = ({index, text}) => {
  const active = 0;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          height: 40,
          justifyContent: 'center',
          marginTop: 20,
          marginHorizontal: 5,
          width: 140,
          alignItems: 'center',
          borderRadius: 20,
        },
        text: {
          fontSize: fonts.xs,
          fontWeight: '600',
        },
      }),
    [safearea],
  );

  return (
    <Fragment>
      {active === index ? (
        <GradientButton style={styles.container} label={text} height={40} />
      ) : (
        <TouchableOpacity
          style={[styles.container, {backgroundColor: '#E6F0FF'}]}>
          <GradientText style={styles.text}>{text}</GradientText>
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

export default Filter;
