import React from "react";
import { Input } from "native-base";
import { Text, StyleSheet } from "react-native";
import FontFamily from "../constants/FontFamily";
import COLORS from "../constants/Colors";

const InputComponent = (props) => {
  return (
    <>
      {props.label && 
      <Text style={styles.label}>{props.label}</Text>}
      <Input
        placeholder={props.placeHolder}
        style={[styles.inputStyle, props.customStyles]}
        variant={props.variant}
        placeholderTextColor={props.placeholderTextColor}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: FontFamily.nunitoMedium,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 0,
    borderRadius: 5,
  },
});

export default InputComponent;
