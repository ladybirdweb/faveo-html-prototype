import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import InputComponent from "../../components/InputComponent";
import Images from "../../constants/Images";
import { Box } from "native-base";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/ButtonComponent";

const Url = () => {
  const navigation = useNavigation();
  const onPressChangeLanguage = () => {
    navigation.navigate("ChangeLanguage");
  };
  const onPressForgot = () => {
    //  navigation.navigate('ContactMemberProfile');
  };
  const onPressNext = () => {
    navigation.navigate("SignIn");
  };
  return (
    <ImageBackground
      source={Images.UrlBG}
      resizeMode="cover"
      style={styles.image}
    >
      <Image
        source={Images.Logo}
        style={styles.logoStyle}
        resizeMode="contain"
      />
      <Box
        style={styles.boxStyle}
        shadow="7"
        px="5"
        m="0"
        alignSelf="center"
        width="80%"
        height="419"
        borderRadius="md"
        borderWidth="0"
        bg="white"
      >
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={onPressChangeLanguage}
        >
          <Text style={styles.languageText}>Change Language</Text>
        </TouchableOpacity>
        <InputComponent label={"Faveo URL"} placeHolder="faveoapp.com" />
        <TouchableOpacity
          style={{ alignItems: "flex-end", marginTop: 20 }}
          onPress={onPressForgot}
        >
          <Text style={styles.languageText}>Forgot faveo URL?</Text>
        </TouchableOpacity>
        <ButtonComponent title="Next" onPress={onPressNext} />
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logoStyle: {
    width: 200,
    height: 100,
  },
  languageText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: FontFamily.NunitoBold,
    marginBottom: 54,
  },
  boxStyle: {
    paddingTop: 25,
    marginTop: 75,
  },
});

export default Url;
