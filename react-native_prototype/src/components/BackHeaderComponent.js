import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import Images from "../constants/Images";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";

const BackHeaderComponent = (props) => {
    const {onPress, title} = props;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.backIconContainer}>
        <Image source={Images.BackArrow} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerHeading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 10,
    width: '100%',
  },
  backIconContainer: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 0,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: '100%',
    height: '100%',
  },
  headerHeading: {
    fontSize: 22,
    fontFamily: FontFamily.NunitoSemiBold,
    color: COLORS.secondary,
  },
});

export default BackHeaderComponent;
