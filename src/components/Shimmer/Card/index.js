import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const CardShimmer = () => {
  return (
    <View style={styles.root}>
      <ShimmerPlaceholder
        shimmerColors={['#323232', '#2d2d2d', '#282828']}
        shimmerStyle={{
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        width={400}
        height={200}
      />
      <View style={{width: '90%'}}>
        <ShimmerPlaceholder
          shimmerColors={['#323232', '#2d2d2d', '#282828']}
          shimmerStyle={{
            width: '95%',
            marginTop: 20,
            borderRadius: 5,
          }}
          width={400}
        />
        <ShimmerPlaceholder
          shimmerColors={['#323232', '#2d2d2d', '#282828']}
          shimmerStyle={{
            width: '80%',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 5,
          }}
          width={400}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#272727',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardShimmer;
