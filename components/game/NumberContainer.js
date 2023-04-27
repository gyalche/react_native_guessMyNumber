import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: '#ffffff',
    padding: deviceWidth < 450 ? 12 : 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
