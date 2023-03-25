import { View, Text, StyleSheet } from 'react-native';
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
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
