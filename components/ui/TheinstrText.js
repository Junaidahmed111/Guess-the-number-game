import { Text, View, StyleSheet } from "react-native";
import Colors from "../../contants/colors";
function TheinstrText({ children,style1 }) {
 return <Text style={[styles.instructionText,style1]}>{children}</Text>;
}
export default TheinstrText;
const styles = StyleSheet.create({
  instructionText: {
    fontFamily:'open-sans',
    fontSize: 24,
    color: Colors.primary3,
  },
});
