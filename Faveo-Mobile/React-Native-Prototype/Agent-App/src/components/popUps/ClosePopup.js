import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import Images from "../../constants/Images";

const ClosePopup = () => {
  return (
    <View style={styles.addRequesterContainer}>
      <View style={styles.headingMain}>
        <Text style={styles.addRequestHeading}>Close</Text>
      </View>
      <View style={styles.closeContained}>

        <TouchableOpacity style={styles.notifyTextMain}>
          <Image source={Images.NotifyCustomer} style={styles.notifyImg} />
          <Text style={styles.notifyText}>Notify customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notifyTextMain}>
          <Image source={Images.NotifyCustomer} style={styles.notifyImg} />
          <Text style={styles.notifyText}>Don’t notify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  addRequesterContainer: {
    paddingHorizontal: 25,
    height: "100%",
    bottom: 0,
    width: "100%",
    paddingVertical: 36,
    alignItems: "flex-start",
  },
  headingMain: {
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: COLORS.secondary,
    paddingBottom: 5,
  },
  addRequestHeading: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    textAlign: "left",
  },
  closeContained: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
  },
  notifyTextMain: {
    textAlign: "center",
    alignItems:"center",
    width: "50%",
  },
  notifyText: {
    textAlign: "center",
    fontSize:18,
    fontFamily:FontFamily.PTSansRegular,
    color:COLORS.secondary,
    marginTop:10,
  },
  notifyImg: {
    textAlign: "center",
    background: "blue",
  },
});
export default ClosePopup;
