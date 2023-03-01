import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
import Images from "../constants/Images";

const CustomRadio = ({ item, index, onPress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.outerCircle,
            {
              borderColor:
                isSelected === index ? COLORS.primary : COLORS.secondary,
            },
          ]}
        >
          <View
            style={[
              styles.innerCircle,
              {
                backgroundColor:
                  isSelected === index ? COLORS.primary : COLORS.white,
              },
            ]}
          ></View>
        </View>
        <Text
          style={[
            styles.itemText,
            {
              color: isSelected === index ? COLORS.primary : COLORS.secondary,
              fontFamily:
                isSelected === index
                  ? FontFamily.PTSansBold
                  : FontFamily.PTSansRegular,
            },
          ]}
        >
          {item}
        </Text>
      </View>
      {isSelected === index && (
        <Image source={Images.Check} style={styles.check} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemText: {
    fontFamily: FontFamily.PTSansRegular,
    fontSize: 18,
    lineHeight: 24,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: "center"
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 50,
  },
  check: {
    width: 21,
    height: 16,
  },
});
export default CustomRadio;
