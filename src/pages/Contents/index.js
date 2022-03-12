import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Contents = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>Contents screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});

export default Contents;
