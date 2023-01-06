import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../../constants/Images";
import FontFamily from "../../../constants/FontFamily";
import COLORS from "../../../constants/Colors";
import SearchComponent from "../../../components/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../../components/BackHeaderComponent";

const AllOrganization = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
      <BackHeaderComponent title="All Organization" onPress={onPressBack}/>
      <View style={styles.top}>
        <SearchComponent />
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text style={styles.organizationSubtitle}>1245367890</Text>
        </View>
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text>1245367890</Text>
        </View>
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text>1245367890</Text>
        </View>
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text>1245367890</Text>
        </View>
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text>1245367890</Text>
        </View>
      </View>
      <View style={styles.organizationTitleBox}>
        <Image source={Images.rprofile} />
        <View style={styles.top}>
          <Text style={styles.organizationName}>Organization Name</Text>
          <Text>1245367890</Text>
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
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.secondary,
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
  top:{
    marginTop: 28
  }
});

export default AllOrganization;
