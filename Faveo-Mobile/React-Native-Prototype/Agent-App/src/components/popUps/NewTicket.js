import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import Images from "../../constants/Images";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import { newTicket } from "../../constants/String";

const NewTicket = () => {
  return (
    <View style={styles.addRequesterContainer}>
      <View style={styles.addRequestMain}>
        <Text style={styles.addRequestHeading}>New Ticket</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "85%", backgroundColor: 'red' }}
        >
          {newTicket.map((elm, idx) => {
            return (
              <View key={idx} style={{ marginTop:  20 }}>
                <Text style={styles.contact}> {elm.label}</Text>
                <View
                  style={{
                    width: elm.height ? "90%" : "96%",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomColor: COLORS.secondary,
                      borderBottomWidth: 1,
                      height: 40,
                    }}
                  >
                    <InputComponent
                      variant="unstyled"
                      placeHolder={elm.placeholder}
                      customStyles={{
                        fontSize: 15,
                        color: COLORS.secondary,
                        fontFamily: FontFamily.PTSansBold,
                      }}
                    />
                    <TouchableOpacity>
                      <Image
                        style={{
                          height: elm.height ?? 10,
                          width: elm.width ?? 6,
                          marginRight: 10,
                        }}
                        source={elm?.image}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
          <View style={styles.buttonView}>
            <ButtonComponent customStyle={styles.addLogButton} title="Create" />
          </View>
          <View style={styles.attactView}>
            <Image source={Images.AttachIcon} />
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
  addLogButton: {
    width: "80%",
    alignSelf: "center",
    marginTop: 25,
  },
  contact: {
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    fontSize: 15,
},
  attactView: {
    textAlign: "left",
    marginTop: 22,
    marginLeft: "auto",
    marginBottom: 151,
  },
  buttonView: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
    paddingBottom: 17,
  },
});
export default NewTicket;
