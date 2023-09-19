import { Text, View, StyleSheet } from "react-native";
import Colors from "../../contants/colors";
function TheinstrText({ children }) {
 return <Text style={styles.instructionText}>{children}</Text>;
}
export default TheinstrText;
const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.primary3,
  },
});
