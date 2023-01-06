import { Row } from "native-base";
import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import OnBoarding from "../../components/onboarding/OnBoarding";

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: "20%"}}>
        <Image
          source={Images.Logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
      </View>
      <OnBoarding />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center"},
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    width: 101,
    height: 67,
  },
  splashMain: {
    paddingHorizontal: 54,
    alignItems: "center",
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
  splashImage: {
    width: 300,
    height: 247,
    backgroundColor: "red",
  },
  dotsMain: {
    flexDirection: "row",
    marginTop: 32,
  },
  activeDot: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    marginLeft: 5,
  },
  nextArrow: {
    width: 60,
    height: 60,
    marginTop: 35,
  },
  splashSkip: {
    marginTop: 68,
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
  },
  getStartBtn: {
    marginTop: 44,
  },
});
export default Splash;

//first screen
// <ImageBackground
//   source={Images.SplashBG3}
//   resizeMode="cover"
//   style={styles.image}
// >
//   <Image
//     source={Images.Logo}
//     style={styles.logoStyle}
//     resizeMode="contain"
//   />
//   <View style={styles.splashMain}>
//     <Text style={styles.splashTextDAY}>
//       Ensure you stay focused on your goals for the day
//     </Text>
//     <Text style={styles.splashTextFaster}>
//       Quick swipe actions help you manage incoming tickets faster
//     </Text>
//       <Image source={Images.Splash1} style={styles.splashImage} />
//     <View style={styles.dotsMain}>
//       <View style={styles.dots}></View>
//       <View style={styles.dot}></View>
//       <View style={styles.dot}></View>
//     </View>
//     <Image source={Images.NextArrow} style={styles.nextArrow}/>
//     <Text style={styles.splashSkip}>Skip</Text>
//   </View>
// </ImageBackground>
//second screen
//   <ImageBackground
//   source={Images.SplashBG1}
//   resizeMode="cover"
//   style={styles.image}
// >
//   <Image
//     source={Images.Logo}
//     style={styles.logoStyle}
//     resizeMode="contain"
//   />
//   <View style={styles.splashMain}>
//     <Text style={styles.splashTextDAY}>
//     Improve the speed of your resolutions
//     </Text>
//     <Text style={styles.splashTextFaster}>
//     Utilize bulk actions to handle multiple ticks at once
//     </Text>
//       <Image source={Images.Splash2} style={styles.splashImage} />
//     <View style={styles.dotsMain}>
//       <View style={styles.dots}></View>
//       <View style={styles.dot}></View>
//       <View style={styles.dot}></View>
//     </View>
//     <Image source={Images.NextArrow} style={styles.nextArrow}/>
//     <Text style={styles.splashSkip}>Skip</Text>
//   </View>
// </ImageBackground>
//THird screen
// <ImageBackground
//   source={Images.UrlBG}
//   resizeMode="cover"
//   style={styles.image}
// >
//   <Image
//     source={Images.Logo}
//     style={styles.logoStyle}
//     resizeMode="contain"
//   />
//   <View style={styles.splashMain}>
//     <Text style={styles.splashTextDAY}>
//       Contextualize the ticket in its entirety
//     </Text>
//     <Text style={styles.splashTextFaster}>
//       Update relevant information about conversations and view them in
//       detail
//     </Text>
//     <Image source={Images.Splash3} style={styles.splashImage} />
//     <View style={styles.dotsMain}>
//       <View style={styles.activeDot}></View>
//       <View style={styles.dot}></View>
//       <View style={styles.dot}></View>
//     </View>
//     <Text style={styles.getStartBtn}>
//       <ButtonComponent
//         title="Get Started"
//         customStyle={{
//           backgroundColor: COLORS.secondary,
//           paddingHorizontal: 16,
//         }}
//       />
//     </Text>
//     <Text style={styles.splashSkip}>Skip</Text>
//   </View>
// </ImageBackground>
