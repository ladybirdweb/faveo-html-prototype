import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontFamily from "../../../constants/FontFamily";
import COLORS from "../../../constants/Colors";
import SearchComponent from "../../../components/SearchComponent";
import Images from "../../../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../../components/BackHeaderComponent";

const UserList = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.allOrganizationContainer} edges={['top', 'bottom']} >
      <View style={styles.allOrganizationTop}>
        <TouchableOpacity onPress={onPressBack}>
        <Image source={Images.BackArrow} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.allOrganizationHeading}>User list</Text>
        <Text>
          <Image source={Images.user} style={styles.userIcon} />
          <Image source={Images.Contact} style={styles.contactIcon} />
        </Text>
      </View>
      <View style={styles.top}>
        <SearchComponent />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
      <View style={styles.organizationTitleBox}>
        <View>
          <Text style={styles.organizationName}>Name</Text>
          <Text style={styles.organizationSubtitle}>User Name</Text>
        </View>
        <Image source={Images.Forword} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  userIcon: {
    width: 16,
    height: 21,
  },
  contactIcon: {
    paddingRight: 20,
    width: 25,
    height: 17,
  },
});

export default UserList;
