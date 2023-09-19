import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./contants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScrreen from "./screens/GameOverScrreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameISOver, setGameISOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameISOver(false);
  }
  function gameOverHandler() {
    setGameISOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameISOver && userNumber) {
    screen = <GameOverScrreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primaryB, Colors.primaryR, Colors.primaryYf]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/splash.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
