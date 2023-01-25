import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const About = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.appLockMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="About" onPress={onPressBack}/>
      <TouchableOpacity>
        <View style={styles.ticketNotificationBox}>
          <Text style={styles.ticketNotificationHeading}>Privacy Policy</Text>
          <Image source={Images.Forword} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.ticketNotificationBox}>
          <Text style={styles.ticketNotificationHeading}>Terms of use</Text>
          <Image source={Images.Forword} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.ticketNotificationBox}>
          <Text style={styles.ticketNotificationHeading}>Attributions</Text>
          <Image source={Images.Forword} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appLockMain: {
    paddingHorizontal: 20,
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
  ticketNotificationBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
  },
  ticketNotificationHeading: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
});
export default About;
