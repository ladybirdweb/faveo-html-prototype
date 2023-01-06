import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../constants/Images";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
import { useDisclose } from "native-base";

const FilterComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const { isOpen, onClose, onOpen } = useDisclose();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View>
      <View style={styles.ticketSection}>
        <View style={styles.ticketLeft}>
          <Image source={Images.Sort} style={styles.sortImage} />
          <Text style={styles.dataCreated}>Date Created</Text>
        </View>
        <TouchableOpacity>
          <Image source={Images.Filter} style={styles.filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ticketLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  dataCreated: {
    marginLeft: 16,
    fontFamily: FontFamily.NunitoBold,
    fontSize: 18,
    color: COLORS.secondary,
  },
  ticketSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
    alignItems: "center",
  },
  sortImage: {
    width: 19,
    height: 18,
  },
  filter: {
    width: 30,
    height: 30,
  },
});
export default FilterComponent;
