import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
import Images from "../constants/Images";
import { useNavigation } from "@react-navigation/native";
import SearchComponent from "../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../components/BackHeaderComponent";

const Analytics = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Analytics" onPress={onPressBack}/>
      <View>
        <View style={styles.searchView}>
          <SearchComponent />
        </View>
        <Text style={styles.favourite}>Favourite widget</Text>
        <View style={styles.bottomView}>
          <Image source={Images.Analytics} style={styles.notification} />
          <Text style={styles.notificationText}>
            Search for a widget and star mark it to list it here.
          </Text>
        </View>
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
  bottomView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,
  },
  noNotification: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginTop: 31,
  },
  notificationText: {
    fontSize: 20,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginTop: 30,
    marginHorizontal: 14,
    textAlign: "center",
  },
  searchView: {
    marginTop: 10,
  },
  favourite: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginTop: 25,
  },
});
export default Analytics;
