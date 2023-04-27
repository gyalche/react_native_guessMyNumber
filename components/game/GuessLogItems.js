import { View, Text } from 'react-native';
import React from 'react';

export default function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>{roundNumber}</Text>
      <Text>Opponents Guess, {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
