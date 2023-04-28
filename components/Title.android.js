import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

export default function ({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    fontSize: 24,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    //since we are in andoroid
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
    maxWidth: '80%',
  },
});
