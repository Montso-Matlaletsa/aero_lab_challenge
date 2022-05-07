import {View, Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import colors from '../../utils/constants/colors';
import Gradient from '../Gradient';
import {walkthroughs} from '../../utils/constants/walkthroughs';
import WalkThroughCard from '../WalkThroughCard';
import {safearea} from '../../utils/constants/canstants';

const WalkThrough = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          width: '100%',
          height: '100%',
        },
        image: {
          width: '100%',
          resizeMode: 'cover',
          alignSelf: 'center',
          height: 300,
          bottom: 30,
        },
        card: {
          backgroundColor: 'white',
          height: 408,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 32,
          bottom: 45,
          width: 335,
          alignSelf: 'center',
          opacity: 1,
        },
        containContent: {
          width: '90%',
          backgroundColor: 'white',
          height: '90%',
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 10,
        },
        walkthroughImg: {
          width: '100%',
          height: 200,
          alignSelf: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        labelContainer: {
          flexDirection: 'row',
          padding: 20,
        },
        logoContainer: {
          height: 40,
          width: 40,
          backgroundColor: colors.GREY,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.8,
        },
      }),
    [safearea],
  );

  return (
    <Gradient style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/hero-responsive.png')}
          style={styles.image}
        />
        {walkthroughs.map((walkthrough, index) => (
          <WalkThroughCard walkThrough={walkthrough} key={walkthrough.id} />
        ))}
      </View>
    </Gradient>
  );
};

export default WalkThrough;
