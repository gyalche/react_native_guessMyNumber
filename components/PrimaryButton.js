import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function PrimaryButton({ children }) {
  const pressHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonOuterContainer, styles.pressed]
            : styles.buttonOuterContainer
        }
        onPress={pressHandler}>
        <Text style={styles.buttonTexts}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 4,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
