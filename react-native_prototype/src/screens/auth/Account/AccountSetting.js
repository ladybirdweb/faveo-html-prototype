import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/Colors";
import Images from "../../../constants/Images";
import FontFamily from "../../../constants/FontFamily";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../../components/BackHeaderComponent";
const AccountSetting = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Settings" onPress={onPressBack}/>
      <View style={styles.allOrgTop}>
        <View style={styles.userName}>
          <Image source={Images.UserTicket} />
          <View style={styles.left}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.email}>john.doe@infoxeron.com</Text>
            <Text style={styles.email}>infoxeron.faveo.com</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={Images.edit} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.aboutText}
        onPress={() => {
          navigation.navigate("TicketNotification");
        }}
      >
        <View style={styles.userName}>
          <Image source={Images.ticketNotification} />
          <Text style={styles.title}>Ticket notification</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutText}
        onPress={() => {
          navigation.navigate("NotificationSchedule");
        }}
      >
        <View style={styles.userName}>
          <Image source={Images.notificationSchedule} />
          <Text style={styles.title}>Notification schedule</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutText}
        onPress={() => {
          navigation.navigate("AppLock");
        }}
      >
        <View style={styles.userName}>
          <Image source={Images.appLock} />
          <Text style={styles.title}>App lock</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutText}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <View style={styles.userName}>
          <Image source={Images.about} />
          <Text style={styles.title}>About</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutText}
        onPress={() => {
          navigation.navigate("Feedback");
        }}
      >
        <View style={styles.userName}>
          <Image source={Images.give} />
          <Text style={styles.title}>Give Feedback</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutText}>
        <View style={styles.userName}>
          <Image source={Images.whatnew} />
          <Text style={styles.whatNews}>What’s new?</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutText}>
        <View style={styles.userName}>
          <Image source={Images.rateApp} />
          <Text style={styles.rateAppText}>Rate App</Text>
        </View>
        <Image source={Images.Forword} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutText}>
        <View style={styles.userName}>
          <Image source={Images.signOut} />
          <Text style={styles.title}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  allOrganizationContainer: {
    paddingHorizontal: 25,
    paddingBottom: 35,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  allOrganizationTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 10,
  },
  allOrganizationHeading: {
    fontSize: 22,
    fontFamily: FontFamily.NunitoSemiBold,
    color: COLORS.secondary,
  },
  email: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  whatNews: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  rateAppText: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  allOrgTop: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  aboutText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  userName: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    marginLeft: 15,
  },
  username: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
});
export default AccountSetting;
