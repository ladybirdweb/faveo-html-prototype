import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactProfile = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.topView}>
        <TouchableOpacity>
          <Image source={Images.BackWhite} />
        </TouchableOpacity>
        <Image source={Images.bprofile} />
        <TouchableOpacity>
          <Image source={Images.wedit} />
        </TouchableOpacity>
      </View>

      <View style={styles.bobTree}>
        <Text style={styles.bobTreeView}>Bob Tree</Text>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <Image source={Images.PLUS} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.Crosscontact} style={styles.margin} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.CALL} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 236,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 25,
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bobTree: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flexDirection: "row",
    marginTop: 20,
  },
  margin: {
    marginHorizontal: 20,
  },
  bobTreeView: {
    fontSize: 22,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.white,
    marginTop: 15,
  },
});
export default ContactProfile;
