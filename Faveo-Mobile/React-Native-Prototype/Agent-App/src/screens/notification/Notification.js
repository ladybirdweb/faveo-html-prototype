import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../components/BackHeaderComponent";
const Notification = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Notifications" onPress={onPressBack}/>
      <View style={styles.notificationMain}>
        <Image source={Images.Notifications} style={styles.notification} />
        <Text style={styles.noNotification}>No Notifications</Text>
        <Text style={styles.notificationText}>
          We hope you find what you are looking for
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  allOrganizationContainer: {
    paddingHorizontal: 25,
    paddingBottom: 35,
    height: "100%",
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
  notification: {
    width: 120,
    height: 89,
  },
  notificationMain: {
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  noNotification: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginTop: 31,
    textAlign: "center",
  },
  notificationText: {
    fontSize: 20,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    paddingHorizontal: 54,
    textAlign: "center",
    marginTop: 5,
  },
});
export default Notification;
