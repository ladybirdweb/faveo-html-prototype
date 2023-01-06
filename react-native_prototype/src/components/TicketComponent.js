import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../constants/Images";
import ButtonComponent from "./ButtonComponent";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
const TicketComponent = () => {
  return (
    <View style={styles.ticketContainer}>
      <View style={styles.ticketsMain}>
        <View style={styles.ticketTopLeft}>
          <Image source={Images.UserTicket} style={styles.UserTicket} />
          <Text style={styles.ticketUsername}>Sarah James</Text>
        </View>
        <View>
          <ButtonComponent
            title="Overdue"
            customStyle={styles.buttonComponentStyle}
            labelCustomStyle={styles.overdueLabel}
          />
        </View>
      </View>
      <View style={styles.ticketReceived}>
        <TouchableOpacity>
          <Image source={Images.Mail} style={styles.mailImage} />
        </TouchableOpacity>
        <Text style={styles.TicketrecText}>Received a broken TV</Text>
        <Text style={styles.hash3}>#3</Text>
      </View>
      <View style={styles.createAgoMain}>
        <Text style={styles.hdskText}>HDSK-AAAB-4732 (10)</Text>
        <TouchableOpacity>
          <Image source={Images.Attachment} style={styles.attachmentIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.Contact} style={styles.contact} />
        </TouchableOpacity>
      </View>
      <View style={styles.createAgoMain}>
        <Text style={styles.createAgo}>Created 13 days ago</Text>
        <Text style={styles.overdueDays}>| Overdue by 7 days</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={styles.overduezz}>
          <Text style={styles.lowText}></Text>
          <Text style={styles.low}>Low</Text>
        </View>
        <View style={styles.blank}>
          <Text style={{}}>
            <Image source={Images.AddUser} />
          </Text>
          <Text style={styles.escalat}>Escalations / John Doe</Text>
        </View>
        <View style={styles.bottomView}>
          <Text>
            <Image source={Images.OpenArrow} />
          </Text>
          <Text style={styles.open}>Open</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ticketContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 15,
  },
  ticketsMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 33,
    alignItems: "center",
  },
  UserTicket: { backgroundColor: "pink" },
  ticketTopLeft: {
    flexDirection: "row",
  },
  ticketUsername: {
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
    marginLeft: 10,
  },
  ticketReceived: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  mailImage: {
    width: 15,
    height: 10.75,
  },
  TicketrecText: {
    marginLeft: 8,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.lightBlack,
  },
  hash3: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
  },
  createAgoMain: {
    flexDirection: "row",
    marginTop: 12,
  },
  createAgo: {
    fontSize: 13,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
  },
  overdueDays: {
    fontSize: 13,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
    marginLeft: 22,
  },
  hdskText: {
    fontSize: 13,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.lightBlack,
  },
  attachmentIcon: {
    marginLeft: 10.28,
  },
  contact: {
    marginLeft: 10.28,
  },
  buttonComponentStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  overdueLabel: {
    color: COLORS.red,
  },
  overduezz: {
    width: 49,
    height: 25,
    backgroundColor: "#DADADA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  low: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  blank: {
    width: 174,
    height: 25,
    backgroundColor: "#DADADA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 20,
  },
  escalat: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  bottomView: {
    width: 65,
    height: 25,
    backgroundColor: "#DADADA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 20,
  },
  open: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  lowText: {
    backgroundColor: "#1F0FD6",
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});
export default TicketComponent;
