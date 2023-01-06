import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import InputComponent from "../../components/InputComponent";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const navigation = useNavigation();
  const onPressSignIn = () => {
    navigation.navigate("FaveoAccount");
  };
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ImageBackground
        source={Images.UrlBG}
        resizeMode={"cover"}
        style={styles.image}
      >
        <View style={styles.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={Images.Logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.signinHeading}>Sign in</Text>
            <View style={styles.signinMain}>
              <InputComponent placeHolder="Enter Email ID" label="Email" />
              <View style={styles.enterPwd}>
                <InputComponent placeHolder="Enter Password" label="Password" />
                <Text style={styles.forgotPwdText}>Forgot Password?</Text>
              </View>
              <View style={styles.signINBtn}>
                <ButtonComponent
                  title="Sign in"
                  color={COLORS.primary}
                  height={40}
                  onPress={onPressSignIn}
                />
                <Text>
                  By clicking Sign in, I accept the Faveo Terms of Srvices and
                  Privacy Policy
                </Text>
              </View>
              <View style={styles.top}>
                <ButtonComponent
                  isIcon={true}
                  title="Sign in with Google"
                  customStyle={styles.btnComponentCustomStyle}
                />
              </View>
              <View style={styles.top}>
                <ButtonComponent
                  title="Sign in with LDAP"
                  customStyle={styles.btnComponentCustomStyle}
                />
              </View>
              <View style={styles.top}>
                <ButtonComponent
                  title="LDAPNEW"
                  customStyle={styles.btnComponentCustomStyle}
                />
              </View>
              <View style={styles.verticalMargin}>
                <ButtonComponent
                  title="Register"
                  customStyle={styles.btnComponentCustomStyle}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  signinMain: {
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 35,
  },
  signinHeading: {
    fontSize: 35,
    fontFamily: FontFamily.NunitoBlack,
    color: COLORS.secondary,
    marginTop: 35,
    textAlign: "center",
  },
  enterPwd: {
    marginTop: 20,
  },
  forgotPwdText: {
    textAlign: "right",
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: FontFamily.NunitoBold,
  },
  signINBtn: {
    marginTop: 25,
  },
  btnComponentCustomStyle: {
    backgroundColor: COLORS.secondary,
    height: 45,
  },
  top: {
    marginTop: 20,
  },
  verticalMargin: {
    marginVertical: 20,
  },
  main: {
    alignItems: "center",
  },
});

export default SignIn;
