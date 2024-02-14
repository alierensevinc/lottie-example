import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/animations/animation.json")}
        colorFilters={{}}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
