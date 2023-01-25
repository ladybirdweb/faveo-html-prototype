import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";

const Addrequester = () => {
  return (
    <View style={styles.addRequesterContainer}>
      <View style={styles.addRequestMain}>
        <Text style={styles.addRequestHeading}>Add requester</Text>
        <View style={[styles.addRequestInput, { marginTop: 19 }]}>
          <InputComponent label="Name*" variant="underlined" />
        </View>
        <View style={styles.addRequestInput}>
          <InputComponent label="Email" variant="underlined" />
        </View>
        <View style={styles.addRequestInput}>
          <InputComponent label="Phone" variant="underlined" />
        </View>
      </View>
      <ButtonComponent customStyle={styles.addLogButton} title="Create" />
    </View>
  );
};
const styles = StyleSheet.create({
  addRequesterContainer: {
    paddingHorizontal: 25,
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 36,
    alignItems: "center",
  },
  addRequestHeading: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    textAlign: "center",
  },
  marginTop: {
    marginTop: 19,
    backgroundColor: "red",
  },
  addRequestMain: {
    width: "100%",
  },
  addRequestInput: {
    marginTop: 20,
  },
  addLogButton: {
    width: "80%",
    alignSelf: "center",
  },
});

export default Addrequester;
