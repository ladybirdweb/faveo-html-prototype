import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import InputComponent from "../../components/InputComponent";
import Images from "../../constants/Images";
import { Box, Center, Select } from "native-base";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/ButtonComponent";
import { SafeAreaView } from "react-native-safe-area-context";

const FaveoAccount = () => {
  const navigation = useNavigation();
  const onPressAllow = () => {
    navigation.navigate("MyTicket");
  };
  return (
    <SafeAreaView style={styles.faveoMain} edges={['top', 'bottom']}>
      <View style={styles.faveoLogo}>
        <Image source={Images.Logo} style={styles.logo} resizeMode="contain" />
      </View>

      <Box
        shadow="7"
        alignSelf="center"
        width="80%"
        // height="419"
        borderRadius="md"
        borderWidth="0"
        bg="white"
        style={styles.faveoAccoundbox}
      >
        <Text style={styles.faveoText}>
          You are logging into your Faveo account using single sign - on as;
        </Text>
        <View style={styles.avatarImageMain}>
          <Image source={Images.Avatar} style={styles.avatarImage} />
        </View>
        <View style={styles.faveobottom}>
          <Text style={styles.faveoUsername}>John Doe</Text>
          <Text style={styles.faveoEmail}>johndoe21@gmail.com</Text>
          <View style={styles.faveoAllow}>
            <ButtonComponent
              title="Allow"
              customStyle={styles.allowBtn}
              onPress={onPressAllow}
            />
          </View>
          <View style={styles.faveoCancle}>
            <ButtonComponent
              title="Cancel"
              customStyle={styles.cancleBtn}
              labelCustomStyle={{ color: COLORS.secondary }}
            />
          </View>
        </View>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  faveoMain: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  faveoAccoundbox: {
    paddingTop: 45,
    paddingBottom: 28,
    paddingHorizontal: 41,
  },
  faveoText: {
    fontSize: 15,
    color: COLORS.secondary,
    textAlign: "center",
    fontFamily: FontFamily.PTSansRegular,
  },
  faveoLogo: {
    margin: "auto",
    alignItems: "center",
  },
  avatarImageMain: {
    alignItems: "center",
    marginTop: 35,
  },
  avatarImage: {
    width: 68,
    height: 68,
  },
  faveobottom: {
    alignItems: "center",
    marginTop: 20,
  },
  faveoUsername: {
    fontSize: 15,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  faveoEmail: {
    fontSize: 15,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginTop: 5,
  },
  faveoAllow: {
    marginTop: 45,
  },
  faveoCancle: {
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  allowBtn: {
    width: 140,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  cancleBtn: {
    width: 140,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
});

export default FaveoAccount;
