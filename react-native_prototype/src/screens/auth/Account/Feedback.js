import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../../constants/Images";
import COLORS from "../../../constants/Colors";
import FontFamily from "../../../constants/FontFamily";
import ButtonComponent from "../../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeaderComponent from "../../../components/BackHeaderComponent";

const Feedback = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.appLockMain} edges={['top', 'bottom']}>
      <BackHeaderComponent title="Feedback" onPress={onPressBack}/>
      <Text style={styles.wouldText}>
        What would you like us to improve? You can also write to us at{" "}
        <Text style={styles.emailText}>support@faveo.com</Text>{" "}
      </Text>
      <Text style={styles.feedback}>Write your feedback</Text>
      <View
        style={styles.imageView
        }
      ></View>
      <View
        style={{
          borderWidth: 1,
          borderColor: COLORS.secondary,
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderRadius: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.file} />
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: FontFamily.PTSansBold,
                fontSize: 16,
              }}
            >
              IMG_6519.PNG
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FontFamily.PTSansRegular,
                color: COLORS.secondary,
              }}
            >
              270 KB
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image source={Images.cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.ImageBox}>
        <View style={styles.imageView}>
          <Image source={Images.file} />
          <View style={styles.left}>
            <Text style={styles.imgText}>IMG_6519.PNG</Text>
            <Text style={styles.KbTxt}>270 KB</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image source={Images.cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.ImageBox}>
        <View style={styles.imageView}>
          <Image source={Images.file} />
          <View style={styles.left}>
            <Text style={styles.imgText}>IMG_6519.PNG</Text>
            <Text style={styles.KbTxt}>270 KB</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image source={Images.cross} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.attachmentView}>
        <Image source={Images.attach} />
        <Text style={styles.attachment}>Add an attachment</Text>
      </TouchableOpacity>
      <View style={styles.sendButton}>
        <ButtonComponent title="Send" />
      </View>
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
  sendButton: {
    marginTop: 65,
    paddingHorizontal: 26,
  },
  wouldText: {
    fontSize: 16,
    marginTop: 35,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  emailText: {
    color: COLORS.primary,
    fontFamily: FontFamily.PTSansBold,
  },
  KbTxt: {
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  ImageBox: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  imgText: {
    color: COLORS.primary,
    fontFamily: FontFamily.PTSansBold,
    fontSize: 16,
  },
  feedback: {
    fontSize: 15,
    marginTop: 25,
    fontFamily: FontFamily.PTSansRegular,
    color: "rgba(47, 60, 78, 0.5)",
  },
  attachment: {
    marginLeft: 10,
    color: COLORS.secondary,
    fontFamily: FontFamily.PTSansRegular,
    fontSize: 15,
  },
  attachmentView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  left:{
    marginLeft: 15
  },
  imageView:{
    flexDirection: "row", alignItems: "center"
  }
});
export default Feedback;
