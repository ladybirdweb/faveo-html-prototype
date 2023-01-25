import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import ButtonComponent from "../ButtonComponent";
import InputComponent from "../InputComponent";

const AttachContact = () => {
  return (
    <View style={styles.addRequesterContainer}>
      <View style={styles.addRequestMain}>
        <Text style={styles.addRequestHeading}>Attach Contact</Text>
        <TouchableOpacity style={styles.groupView}>
          <Text style={styles.groupText}>Select Contact</Text>
          <View style={styles.groupDropdown}>
            <Text>Select Contact</Text>
            <Image source={Images.DownArrow} />
          </View>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <ButtonComponent customStyle={styles.addLogButton} title="Attach" />
        </View>
        <View style={styles.buttonViews}>
          <ButtonComponent customStyle={styles.addLogButtons} title="Cancel" labelCustomStyle={styles.cancleBtn}/>
        </View>
      </View>
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
  addRequestMain: {
    width: "100%",
  },
  groupText: {
    fontSize: 15,
    color: COLORS.secondary,
    fontFamily: FontFamily.PTSansRegular,
  },
  groupView: {
    width: "100%",
    marginTop: 47,
  },
  groupDropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 5,
    paddingTop: 15,
  },
  buttonView: {
    marginTop:85,
  },
  addLogButton: {
    width: "35%",
    alignSelf: "center",
  },
  buttonViews:{
    marginTop:15,
  },
  addLogButtons:{
    width:"35%",
    alignSelf: "center",
    backgroundColor:COLORS.white,
    borderWidth:1,
    borderColor:COLORS.grey,
  },
  cancleBtn:{
    color:COLORS.secondary,
  }
});
export default AttachContact;
