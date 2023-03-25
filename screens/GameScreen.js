import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Text>Higher or Lower?</Text>
        <Title>CHILDREN</Title>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
