import { Text, View, StyleSheet } from "react-native";
import Colors from "../../contants/colors";
function InstructionText({ children }) {
  <Text style={styles.instructionText}>{children}</Text>;
}
export default InstructionText;
const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.primary3,
  },
});
