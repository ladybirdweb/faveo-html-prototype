import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Paginator from "./Paginator";
import Images from "../../constants/Images";

const OnBoardingItem = (props) => {
  const { item } = props;
  const { width } = useWindowDimensions();
  return (
    <>
      <ImageBackground
        source={item.splash}
        resizeMode="cover"
        style={{ width: width, height: "100%" }}
      >
        <StatusBar
          animated={true}
          translucent
          backgroundColor={COLORS.transparent}
          barStyle={"dark-content"}
        />
        <View style={[styles.container, { width }]}>
          <>
            <View>
              <Text style={styles.splashTextDAY}>{item.titleMain}</Text>
              <Text style={styles.splashTextFaster}>{item.titleContent}</Text>
            </View>
            <View style={{ marginBottom: "20%" }}>
              <Image
                source={item.icon}
                style={[styles.image, { resizeMode: "contain" }]}
              />
            </View>
          </>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 247,
  },
  splashTextDAY: {
    fontSize: 20,
    color: COLORS.secondary,
    fontFamily: FontFamily.NunitoBold,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 21,
  },
  splashTextFaster: {
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 5,
    lineHeight: 18,
  },
  nextArrow: {
    width: 60,
    height: 60,
    marginTop: 35,
  },
});

export default OnBoardingItem;
