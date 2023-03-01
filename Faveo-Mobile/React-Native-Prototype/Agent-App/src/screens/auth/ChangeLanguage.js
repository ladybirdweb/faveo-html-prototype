import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const ChangeLanguage = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.changeLanMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Change Language" onPress={onPressBack}/>
      <View style={styles.changeLanguageImageSection}>
        <Image source={Images.ChangeLanguage} />
        <Text style={styles.changelangTextpreffered}>
          Please select preffered languagge
        </Text>
      </View>
      <View style={styles.LanguageContainer}>
        <View style={styles.lanEnglishMain}>
          <TouchableOpacity>
            <Text style={styles.lanEnglish}>English (UK)</Text>
          </TouchableOpacity>
          <Image source={Images.Check} style={styles.checkIcon} />
        </View>
        <TouchableOpacity>
          <Text style={styles.lanFrench}>French</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lanFrench}>Arabic</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lanFrench}>Russian</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  changeLanMain: {
    height: "100%",
    paddingHorizontal: 20,
    // paddingVertical: 75,
  },
  changeLangtopSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 28,
  },
  backIconImage: {
    width: 25,
    height: 25,
  },
  ChangeLanguageText: {
    fontSize: 23,
    fontFamily: FontFamily.NunitoBlack,
    color: COLORS.secondary,
    alignItems: "center",
  },
  changeLanguageImageSection: {
    marginTop: 55,
    alignItems: "center",
  },
  changelangTextpreffered: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBlack,
    color: COLORS.secondary,
  },
  LanguageContainer: {
    marginTop: 53,
  },
  lanEnglish: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: FontFamily.PTSansRegular,
  },
  lanFrench: {
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    fontSize: 18,
    marginTop: 20,
  },
  lanEnglishMain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkIcon: {
    width: 25,
    height: 18,
  },
});

export default ChangeLanguage;
