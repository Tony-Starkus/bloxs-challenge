import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.root,
        ...props.style,
        backgroundColor: props.active ? styles.root.backgroundColor : '#1E1E1E',
      }}>
      <Text style={{...styles.text, color: props.active ? '#000' : '#E6E6E6'}}>
        {props.title}
      </Text>
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
    flexShrink: 1,
    height: 40,
  },
  text: {
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default Button;
