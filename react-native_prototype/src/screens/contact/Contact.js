import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import SearchComponent from "../../components/SearchComponent";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Contact = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.contactMain} edges={['top', 'bottom']}>
      <View style={styles.contactTopView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={Images.Menu} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.allContact}>All Contacts</Text>
        <Image source={Images.addcontact} />
      </View>
      <View style={styles.searchView}>
        <SearchComponent />
      </View>
      <View style={styles.contactContainer}>
        <View style={styles.contactViewBox}>
          <View style={styles.letterCircle}>
            <Text style={styles.letter}>A</Text>
          </View>
          <View style={styles.alexander}>
            <Text style={styles.alexandeText}>Alexander</Text>
          </View>
          <View style={styles.alexander}>
            <Text style={styles.alexandeText}>Aiden</Text>
          </View>
          <View style={styles.alexander}>
            <Text style={styles.alexandeText}>Ashe</Text>
          </View>
          <View style={styles.alexander}>
            <Text style={styles.alexandeText}>Anthony</Text>
          </View>
          <View style={styles.top}>
          <View style={styles.letterCircle}>
            <Text style={styles.letter}>B</Text>
          </View>
            <View style={styles.alexander}>
              <Text style={styles.alexandeText}>Bethany.</Text>
            </View>
            <View style={styles.alexander}>
              <Text style={styles.alexandeText}>Bethany.</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataView}>
          {data.map((i) => {
            return (
              <TouchableOpacity>
                <Text style={styles.dataContant}>{i}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contactMain: {
    paddingHorizontal: 25,
    paddingBottom: 35,
  },
  contactTopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 20,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  allContact: {
    fontSize: 22,
    fontFamily: FontFamily.PTSansBold,
    color: COLORS.secondary,
  },
  alexander: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 10,
    paddingTop: 10,
  },
  alexandeText: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  searchView: {
    marginTop: 5,
  },
  contactContainer: {
    width: "100%",
    flexDirection: "row",
  },
  contactViewBox: {
    width: "100%",
    marginTop: 15,
  },
  top: {
    marginTop: 15,
  },
  dataView: {
    width: "5%",
    marginLeft: 5,
    alignItems: "center",
  },
  dataContant: {
    fontSize: 12,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    alignItems: "center",
    marginTop: 3,
  },
  letterCircle:{
    width:25,
    height:25,
    backgroundColor:COLORS.secondary,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
  },letter:{
    color:COLORS.white,
    fontSize:14,
    fontFamily:FontFamily.NunitoBold,
  }
});
export default Contact;
