import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../contants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import TheinstrText from "../components/ui/TheinstrText";
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // show alert
      Alert.alert("Invalid Number!", "Enter the number between 1 and 99", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <TheinstrText>Enter a Number</TheinstrText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPressCustom={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPressCustom={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary3,
    borderBottomWidth: 2,
    color: Colors.primary3,
    marginVertical: 8,
    fontWeight: "bold",
    width: 70,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
