import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import FontFamily from "../constants/FontFamily";
import COLORS from "../constants/Colors";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, props.customStyle]}
      onPress={props.onPress}
    >
      {props.isIcon && (
        <Image
          source={require("../assets/images/google-icon.png")}
          style={styles.googleIcon}
        />
      )}
      <Text style={[styles.labelStyle, props.labelCustomStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    position: "relative",
  },
  labelStyle: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: "#ffffff",
  },
  googleIcon: {
    position: "absolute",
    left: 5,
    height: 35,
    width: 35,
  },
});

export default ButtonComponent;
