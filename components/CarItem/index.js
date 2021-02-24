import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting At $6.23456</Text>
      </View>
      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.log("Custom Order Was Press");
        }}
      />
      <StyledButton
        type="secoundary"
        content="Existing Inventory"
        onPress={() => {
          console.log("Existing Inventory Was Press");
        }}
      />
    </View>
  );
};

export default CarItem;
