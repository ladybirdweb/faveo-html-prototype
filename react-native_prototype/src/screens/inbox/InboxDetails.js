import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import ButtonComponent from "../../components/ButtonComponent";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontFamily from "../../constants/FontFamily";

const InboxDetails = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.main} edges={["top", "bottom"]}>
      <View style={styles.topView}>
        <TouchableOpacity onPress={onPressBack} style={styles.onpressTouch}>
          <Image source={Images.BackArrow} style={styles.backArrow} />
        </TouchableOpacity>
        <View style={styles.rightView}>
          <Image source={Images.edit} style={styles.editIcon} />
          <Image source={Images.threedot} />
        </View>
      </View>
      <View style={styles.overdueView}>
        <ButtonComponent
          title="Overdue"
          customStyle={styles.buttonComponentStyle}
          labelCustomStyle={styles.overdueLabel}
        />
      </View>
      <View style={styles.openView}>
        <Text style={styles.openText}>Open</Text>
        <Image source={Images.Mail} style={styles.mailIcon} />
      </View>

      <Text style={styles.responseText}>
        First response due 11 days ago Overdue since 9 days ago
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingVertical: 41,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  rightView: {
    flexDirection: "row",
  },
  editIcon: {
    marginRight: 20,
  },
  overdueView: {
    marginTop: 35,
  },
  buttonComponentStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: 67,
  },
  overdueLabel: {
    color: COLORS.red,
  },
  openView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:25,
  },
  mailIcon: {
    width: 16.5,
    height: 12,
  },
  responseText: {
    marginTop: 9,
    fontSize:16,
    fontFamily:FontFamily.PTSansRegular,
    color:COLORS.secondary,
  },
  openText:{
    fontSize:20,
    fontFamily:FontFamily.NunitoBold,
    color:COLORS.secondary,
  }
});
export default InboxDetails;
