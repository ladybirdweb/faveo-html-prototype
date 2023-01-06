import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../constants/Images";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
import { useNavigation } from "@react-navigation/native";
const MenuHeaderComponent = (props) => {
  const {onPressIcon, title} = props;
  const navigation = useNavigation();

  return (
      <View style={styles.ticketTopSection}>
        <TouchableOpacity onPress={onPressIcon}>
          <Image source={Images.Menu} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.myTicketText}>{title}</Text>
        <TouchableOpacity>
          <Image source={Images.Search} />
        </TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
  ticketTopSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 28,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  myTicketText: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
});
export default MenuHeaderComponent;
