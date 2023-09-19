import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressCustom }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressCustom}
        android_ripple={{ color: "grey" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    backgroundColor: "#333333",
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
