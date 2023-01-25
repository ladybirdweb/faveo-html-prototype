import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import SearchComponent from "../../components/SearchComponent";
import MenuHeaderComponent from "../../components/MenuHeaderComponent";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const ContactsDictionary = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.allOrganizationContainer} edges={['top', 'bottom']}>
     <BackHeaderComponent title="Contacts Dictionary" onPress={onPressBack}/>
      <View style={styles.top}>
        <SearchComponent />
      </View>
      <View style={styles.organizationTitleBox}>
        <View style={styles.organizationView}>
          <Image source={Images.rprofile} />
          <View style={styles.left}>
            <Text style={styles.organizationName}>rohit5</Text>
          </View>
        </View>
        <Text>User</Text>
      </View>
      <View style={styles.organizationTitleBox}>
        <View style={styles.organizationView}>
          <Image source={Images.rprofile} />
          <View style={styles.left}>
            <Text style={styles.organizationName}>rohit5</Text>
          </View>
        </View>
        <Text>User</Text>
      </View>
      <View style={styles.organizationTitleBox}>
        <View style={styles.organizationView}>
          <Image source={Images.rprofile} />
          <View style={styles.left}>
            <Text style={styles.organizationName}>rohit5</Text>
          </View>
        </View>
        <Text>User</Text>
      </View>
      <View style={styles.organizationTitleBox}>
        <View style={styles.organizationView}>
          <Image source={Images.rprofile} />
          <View style={styles.left}>
            <Text style={styles.organizationName}>rohit5</Text>
          </View>
        </View>
        <Text>User</Text>
      </View>
      <View style={styles.organizationTitleBox}>
        <View style={styles.organizationView}>
          <Image source={Images.rprofile} />
          <View style={styles.left}>
            <Text style={styles.organizationName}>rohit5</Text>
          </View>
        </View>
        <Text>User</Text>
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
    justifyContent: "space-between",
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
  top: {
    marginTop: 15,
  },
  left: {
    marginLeft: 15,
  },
  organizationView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ContactsDictionary;
