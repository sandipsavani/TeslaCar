import React from "react";
import { View, Pressable, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;
  const bgColor = ["primary"].includes(type) ? "#171A20CC" : "#FFFFFFA6";
  const textColor = ["primary"].includes(type) ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={() => onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
