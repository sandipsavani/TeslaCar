import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { modelName, tagLine, image, tagLineCTA } = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{modelName}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
