import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={{...styles.root, ...props.style}}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FDC70A',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default Button;
