import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardShimmer from '../../components/Shimmer/Card';

const Contents = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>Contents screen</Text>
      <CardShimmer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default Contents;
