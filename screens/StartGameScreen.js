import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInputs}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 8,
    elevation: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
  },
  numberInputs: {
    height: 50,
    fontSize: 32,
    borderColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    backgroundColor: 'transparent',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
  },
});
