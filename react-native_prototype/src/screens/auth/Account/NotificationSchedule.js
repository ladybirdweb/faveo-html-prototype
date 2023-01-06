import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/Colors";
import FontFamily from "../../../constants/FontFamily";
import Images from "../../../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../../components/BackHeaderComponent";


const NotificationSchedule = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.notificationScheduleContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Notification schedule" onPress={onPressBack}/>
      <View style={styles.notificationMain}>
        <Image source={Images.redAlert} style={styles.redAlertImg} />
        <Text style={styles.notificationOff}>
          Notification turned off, please tap
          {"\n"}here to turn ON in settings
        </Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.rcvNotification}>Receive notification</Text>
      </View>
      <Text style={styles.rcvnotePera}>
        You will receive notifications only in the hours you choose, but you can
        open the app and view updates at any time. Learn More
      </Text>
   
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  notificationScheduleContainer: {
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
  rcvNotification: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  rcvnotePera: {
    marginTop: 25,
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  notificationOff: {
    paddingLeft: 12,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  notificationMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
    paddingBottom: 32,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
  },
  redAlertImg: {
    width: 28,
    height: 26,
  },
  top: {
    marginTop: 30,
  },
});
export default NotificationSchedule;
