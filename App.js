import React from "react";
import { StyleSheet, View } from "react-native";
import CarLists from "./components/CarLists";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarLists />
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
