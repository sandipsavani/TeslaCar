import React from "react";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        modelName="Model 3"
        tagLine={"Order Online For "}
        tagLineCTA={"Touchfree Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
