import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CardShimmer from '../../components/Shimmer/Card';
import Button from '../../components/Button';

const Contents = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.buttonsNavigation}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Button title="Todos" active={true} />
        <Button title="Agronegócios" style={styles.buttonGap} />
        <Button title="Energia" style={styles.buttonGap} />
        <Button title="Real" style={styles.buttonGap} />
        <Button title="Dolar" style={styles.buttonGap} />
        <Button title="Tecnologia" style={styles.buttonGap} />
      </ScrollView>
      <ScrollView style={{marginTop: 20}}>
        <CardShimmer style={styles.cardGap} />
        <CardShimmer />
      </ScrollView>
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
  buttonsNavigation: {
    flexDirection: 'row',
  },
  buttonGap: {
    marginLeft: 10,
  },
  cardGap: {
    marginBottom: 20,
  },
});

export default Contents;
