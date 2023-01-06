import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../../constants/Images";
import FontFamily from "../../../constants/FontFamily";
import COLORS from "../../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactMemberProfile = () => {
  return (
   <SafeAreaView edges={['top', 'bottom']}>
      <View style={styles.contactMemberTop}>
        <View style={styles.contactMemberTopView}>
          <TouchableOpacity>
            <Image source={Images.BackWhite} />
          </TouchableOpacity>
          <Image source={Images.bprofile} />
          <Text></Text>
        </View>
        <View style={styles.ContactProfileText}>
          <Text style={styles.userName}>Rohit Gupta(user)</Text>
          <Text style={styles.active}>Active</Text>
        </View>
      </View>
      <View style={styles.contactMemberBottomContainer}>
        <View style={styles.contactMemberMailBox}>
          <Image source={Images.Mail} style={styles.mailIcon} />
          <Text style={styles.contactMemberEmail}>
            Support@infoxeron.faveo.com
          </Text>
        </View>
        <Text style={styles.contactMyTickets}>My Tickets</Text>

        <View style={styles.openTicket}>
          <Text style={styles.openTicketText}>Open Tickets</Text>
          <TouchableOpacity>
            <Image source={Images.Forword} />
          </TouchableOpacity>
        </View>
        <View style={styles.openTicket}>
          <Text style={styles.openTicketText}>Open Tickets</Text>
          <TouchableOpacity>
            <Image source={Images.Forword} />
          </TouchableOpacity>
        </View>
        <View style={styles.openTicket}>
          <Text style={styles.openTicketText}>Open Tickets</Text>
          <TouchableOpacity>
            <Image source={Images.Forword} />
          </TouchableOpacity>
        </View>
        <View style={styles.openTicket}>
          <Text style={styles.openTicketText}>Open Tickets</Text>
          <TouchableOpacity>
            <Image source={Images.Forword} />
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contactMemberTop: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 55,
  },
  contactMemberTopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactMemberBottomContainer: {
    paddingHorizontal: 25,
    paddingVertical: 28,
  },
  mailIcon: {
    width: 15,
    height: 10.75,
  },
  contactMemberMailBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 10,
  },
  contactMemberEmail: {
    marginLeft: 15,
    fontSize: 15,
    fontFamily: FontFamily.PTSansBold,
    color: COLORS.secondary,
  },
  openTicket: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 15,
    marginTop: 20,
  },
  openTicketText: {
    fontSize: 18,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
  },
  contactMyTickets: {
    color: "#646464",
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    marginTop: 20,
  },
  ContactProfileText: {
    marginTop: 15,
  },
  userName: {
    textAlign: "center",
    fontSize: 22,
    color: COLORS.white,
    fontFamily: FontFamily.NunitoBold,
  },
  active: {
    textAlign: "center",
    fontSize: 22,
    color: COLORS.white,
    fontFamily: FontFamily.NunitoBold,
  },
});
export default ContactMemberProfile;
