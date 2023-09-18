import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation:8,
    backgroundColor: "#72063c",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    backgroundColor: "red",
    width: 70,
    textAlign: "center",
  },
});
