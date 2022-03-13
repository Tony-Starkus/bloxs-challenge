import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const CardNews = ({image, title, style}) => {
  return (
    <TouchableOpacity style={[styles.root, style]}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#272727',
    width: '100%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default CardNews;
