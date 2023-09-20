import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../contants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: Colors.primaryY,
  },
});
