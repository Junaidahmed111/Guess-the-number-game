import { View, StyleSheet } from "react-native";
import Colors from "../../contants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: Colors.primaryY,
  },
});
