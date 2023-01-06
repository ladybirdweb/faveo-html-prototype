import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../../constants/Images";
import FontFamily from "../../../constants/FontFamily";
import COLORS from "../../../constants/Colors";
import SearchComponent from "../../../components/SearchComponent";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../../components/BackHeaderComponent";

const Userdetails = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="User Detail" onPress={onPressBack}/>
      <View style={styles.organizationTitleBox}>
        <View style={styles.top}>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>John Doe</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.organizationName}>User Name</Text>
          <Text style={styles.organizationSubtitle}>shhsajjjka</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.organizationName}>Email</Text>
          <Text style={styles.organizationSubtitle}>johndoe@gmail.com</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.organizationName}>Phone</Text>
          <Text style={styles.organizationSubtitle}>0123456789</Text>
        </View>
      </View>
    
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
  organizationTitleBox: {
    marginTop: 15,
    paddingBottom: 15,
  },
  organizationName: {
    fontSize: 20,
    color: COLORS.secondary,
    fontFamily: FontFamily.NunitoSemiBold,
  },
  organizationSubtitle: {
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  top: {
    paddingTop: 15,
  },
});

export default Userdetails;
