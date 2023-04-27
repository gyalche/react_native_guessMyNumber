import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Dimension,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();
  const handleInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
      //show alert;
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
        { text: 'Okey', style: 'destructive', onPress: resetInputHandler },
      ]);
    }
    onPickNumber(chooseNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Text>Guess My Number</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.instructionText}>Enter a Text</Text>
            <TextInput
              style={styles.numberInputs}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={handleInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <PrimaryButton>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceWidth = Dimension.get('window').height;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: deviceWidth < 400 ? 30 : 100,
    alignItems: 'center',
  },
  instructionText: {
    color: 'white',
    fontSize: 24,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
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
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
