import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Images from "../../constants/Images";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { Switch, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const AppLock = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.appLockMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="App Lock" onPress={onPressBack}/>
      <View style={styles.ticketNotificationBox}>
        <Text style={styles.ticketNotificationHeading}>Use app lock</Text>
        <VStack>
          <Switch size="md" />
        </VStack>
      </View>
      <Text style={styles.applockText}>
        When enabled, you’ll need to authenticate to use Support Desk. Keep it
        enabled to prevent unauthorized access to your account. Learn More
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
  applockText: {
    marginTop: 30,
    fontFamily: FontFamily.NunitoBold,
    fontSize: 16,
    color: COLORS.secondary,
  },
});
export default AppLock;
