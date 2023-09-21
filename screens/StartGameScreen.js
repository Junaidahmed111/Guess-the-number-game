import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
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
  const { width, height } = useWindowDimensions();

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
  

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style = {styles.screen} behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
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
