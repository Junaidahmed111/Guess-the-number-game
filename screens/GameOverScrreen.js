import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../contants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScrreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  const imageWidth = width < 380 ? 150 : 300;
  const imageHeight = width < 380 ? 150 : 300;
  return (
    <View style={[styles.rootContainer,{width:imageWidth},{height:imageHeight}]}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>
        rounds to guess the number
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPressCustom={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}
export default GameOverScrreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primaryB,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
  },
});
