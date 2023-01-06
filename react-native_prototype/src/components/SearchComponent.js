import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Images from "../constants/Images";
import { TextInput } from "react-native-paper";
import FontFamily from "../constants/FontFamily";
import COLORS from "../constants/Colors";
const SearchComponent = () => {
  return (
    <View style={styles.searchSection}>
      <Image source={Images.Search} style={styles.searchIcon} />
      <TextInput
        placeholder="Search here"
        style={styles.input}
        underlineColor="transparent"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 13,
    borderRadius: 5,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: "#EAEAEA",
    color: COLORS.secondary,
    borderBottomWidth: 0,
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
  },
});
export default SearchComponent;
