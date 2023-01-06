import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../../constants/Images";
import COLORS from "../../../constants/Colors";
import FontFamily from "../../../constants/FontFamily";
import InputComponent from "../../../components/InputComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../../components/BackHeaderComponent";

const Profile = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.appLockMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Profile" onPress={onPressBack}/>
      <View style={styles.top}>
        <InputComponent variant="underlined" label="First Name*" />
      </View>
      <View style={styles.top}>
        <InputComponent variant="underlined" label="Last Name" />
      </View>
      <View style={styles.top}>
        <InputComponent variant="underlined" label="Email" />
      </View>
      <View style={styles.top}>
        <InputComponent variant="underlined" label="Work Phone" />
      </View>
      <View style={styles.top}>
        <InputComponent variant="underlined" label="EXT" />
      </View>
      <View style={styles.tops}>
        <Text>Profile Setting</Text>
        <View style={styles.profileview}>
          <View style={styles.changeLanguageView}>
            <Image source={Images.clanguage} />
            <Text style={styles.changeLanguageTxt}>Choose Language</Text>
          </View>
          <Image source={Images.Forword} />
        </View>
        <View style={styles.profileview}>
          <View style={styles.changeLanguageView}>
            <Image source={Images.changePWD} />
            <Text style={styles.changeLanguageTxt}>Choose Language</Text>
          </View>
          <Image source={Images.Forword} />
        </View>
        <View style={styles.bottomBtn}>
          <ButtonComponent title="Update" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appLockMain: {
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  ticketNotificationMain: {
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  allOrganizationContainer: {
    paddingHorizontal: 25,
    paddingVertical: 35,
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
  top: {
    marginTop: 20,
  },
  tops: {
    marginTop: 25,
  },
  changeLanguageTxt: {
    marginLeft: 19,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  changeLanguageView: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  bottomBtn: {
    marginTop: 28,
  },
});
export default Profile;
