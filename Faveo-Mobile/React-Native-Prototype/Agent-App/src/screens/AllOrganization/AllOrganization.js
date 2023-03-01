import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import SearchComponent from "../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const AllOrganization = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={styles.allOrganizationContainer}
      edges={["top", "bottom"]}
    >
      <BackHeaderComponent title="All Organization" onPress={onPressBack} />
      <View style={styles.top}>
        <SearchComponent />
      </View>
      <TouchableOpacity style={styles.organizationTitleBox}>
        <View style={styles.letterCircle}>
          <Text style={{ color: COLORS.white }}>r</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text style={styles.organizationSubtitle}>1245367890</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.organizationTitleBox}>
        <View style={styles.letterCircle}>
          <Text style={{ color: COLORS.white }}>r</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text style={styles.organizationSubtitle}>1245367890</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.organizationTitleBox}>
        <View style={styles.letterCircle}>
          <Text style={{ color: COLORS.white }}>r</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text style={styles.organizationSubtitle}>1245367890</Text>
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
  organizationTitleBox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    paddingVertical: 15,
  },
  letterCircle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 28,
  },
});

export default AllOrganization;
