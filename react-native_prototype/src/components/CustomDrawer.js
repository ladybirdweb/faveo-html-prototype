import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/Colors";
import Images from "../constants/Images";
import FontFamily from "../constants/FontFamily";
const CustomDrawer = (props) => {
  console.log(props, "custom drawer props");
  const navigation = useNavigation();
  const drawerData = [
    {
      icon: "",
      screenName: "My Tickets",
      navigateTo: "MyTicket",
    },
  ];

  return (
    <>
    <ScrollView>
      <View style={styles.drawerContainer}>
        <View style={styles.drawerTop}>
          <Image source={Images.UserTicket} />
          <View style={styles.profileView}>
            <Text style={styles.profileName}>Deepak Sharma</Text>
            <Text style={styles.profileName}>Admin</Text>
          </View>
        </View>
        <View style={styles.createTicketView}>
          <Image source={Images.createTicket} />
          <Text style={styles.createTicketText}>Create Tickets</Text>
        </View>
        <View>
          <Text style={styles.MyTicketsText}>My Ticket</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.Inbox} />
                <Text style={styles.inboxText}>Inbox</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket1} />
                <Text style={styles.inboxText}>My Tickets</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket3} />
                <Text style={styles.inboxText}>My Team Tickets</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket5} />
                <Text style={styles.inboxText}>Unassigned</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket5} />
                <Text style={styles.inboxText}>Overdue</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket6} />
                <Text style={styles.inboxText}>My Pending Approval</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket7} />
                <Text style={styles.inboxText}>Closed</Text>
              </View>
              <View>
                <Image source={Images.count12} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.ticket8} />
                <Text style={styles.inboxText}>Trash</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.inboxView}>
              <View style={styles.inboxleft}>
                <Image source={Images.trash} />
                <Text style={styles.inboxText}>Spam</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.contactView}>
          <Text style={styles.contact}>Contacts</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('ContactsDictionary')}}>
            <View style={styles.contactSub}>
              <Image
                source={Images.Ellipse8}
                style={{ width: 25, height: 25 }}
              />
              <Text style={styles.contactD}>Contacts Dictionary</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('AllOrganization')}}>
            <View style={styles.contactSub}>
              <Image
                source={Images.Ellipse8}
                style={{ width: 25, height: 25 }}
              />
              <Text style={styles.contactD}>All Organisation</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.aboutsView}>
            <Image source={Images.abouts} />
            <Text style={styles.aboutText}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.aboutsView}>
            <Image source={Images.logout} />
            <Text style={styles.aboutText}>Sign out</Text>
          </View>
        </TouchableOpacity> 
      </View>
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  drawerContainer: {
    marginTop: 66,
    marginLeft: 20,
    marginRight: 20,
  },
  drawerTop: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 15,
  },
  profileView: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 16,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  createTicketView: {
    paddingVertical: 15,
    flexDirection: "row",
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 0.5,
  },
  createTicketText: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  MyTicketsText: {
    marginTop: 15,
    color: "#646464",
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
  },
  inboxView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  inboxText: {
    fontSize: 18,
    color: COLORS.secondary,
    marginLeft: 15,
    fontFamily: FontFamily.nunitoRegular,
  },
  inboxleft: {
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 20,
  },
  contact: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginTop: 15,
  },
  contactSub: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  contactD: {
    marginLeft: 17,
    fontSize: 18,
    color: COLORS.secondary,
    fontFamily: FontFamily.nunitoRegular,
  },
  contactView: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 0.5,
    paddingBottom: 15,
  },
  aboutsView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  aboutText: {
    marginLeft: 15,
    fontSize: 18,
    color: COLORS.secondary,
    fontFamily: FontFamily.nunitoRegular,
  },
});

export default CustomDrawer;
