import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import Images from "../../constants/Images";

const NewServiceTickets = () => {
  return (
    <View style={styles.addRequesterContainer}>
      <View style={styles.addRequestMain}>
        <Text style={styles.addRequestHeading}>New Service Tickets</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%" }}
        >
          <View>
            <View style={[styles.addRequestInput, { marginTop: 19 }]}>
              <InputComponent label="Contact" variant="underlined" />
            </View>
            <View style={styles.addRequestInput}>
              <InputComponent label="Subject*" variant="underlined" />
            </View>
            <View style={styles.addRequestInput}>
              <InputComponent label="Description*" variant="underlined" />
            </View>
            <View>
              <View style={styles.attactView}>
                <Image source={Images.AttachIcon} />
              </View>
              <TouchableOpacity style={styles.groupView}>
                <Text style={styles.groupText}>Group</Text>
                <View style={styles.groupDropdown}>
                  <Text>....</Text>
                  <Image source={Images.DownArrow} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.groupView}>
                <Text style={styles.groupText}>Agent</Text>
                <View style={styles.groupDropdown}>
                  <Text>....</Text>
                  <Image source={Images.DownArrow} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.groupView}>
                <Text style={styles.groupText}>Status*</Text>
                <View style={styles.groupDropdown}>
                  <Text>Open</Text>
                  <Image source={Images.DownArrow} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.groupView}>
                <Text style={styles.groupText}>Priority*</Text>
                <View style={styles.groupDropdown}>
                  <Text>Low</Text>
                  <Image source={Images.DownArrow} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <ButtonComponent customStyle={styles.addLogButton} title="Create" />
        </ScrollView>
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
    marginTop: 25,
    marginBottom: 151,
  },
  groupText: {
    fontSize: 15,
    color: COLORS.secondary,
    fontFamily: FontFamily.PTSansRegular,
  },
  groupView: {
    marginTop: 15,
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
  attactView: {
    textAlign: "left",
    marginTop: 22,
    marginLeft: "auto",
  },
});
export default NewServiceTickets;
