import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../components/BackHeaderComponent";
import { SafeAreaView } from "react-native-safe-area-context";
const ChangePassword = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.appLockMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Change Password" onPress={onPressBack}/>
      <View style={styles.topInput}>
        <InputComponent variant="underlined" label="Old Password*" />
      </View>
      <View style={styles.topView}>
        <InputComponent variant="underlined" label="New Password*" />
      </View>
      <View style={styles.topView}>
        <InputComponent variant="underlined" label="Confirm Password*" />
      </View>
      <ButtonComponent title="Update" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appLockMain: {
    paddingHorizontal: 20,
    paddingBottom: 35,
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
  topView: {
    marginTop: 20,
  },
  topInput: {
    marginTop: 95,
  },
});
export default ChangePassword;
