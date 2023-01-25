import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import MenuHeaderComponent from "../../components/MenuHeaderComponent";
import TicketComponent from "../../components/TicketComponent";
import Icon from "react-native-vector-icons/Entypo";
import { Fab } from "native-base";
import { FAB, Portal, Provider } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterComponent from "../../components/FilterComponent";

const MyTicket = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.ticketMain} edges={["top", "bottom"]}>
      <MenuHeaderComponent
        title="My Tickets"
        onPressIcon={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <FilterComponent />
      <TicketComponent />
      {/* <Fab
        colorScheme={COLORS.secondary}
        size={35}
        icon={<Image source={Images.AddIcon} style={{width: 50, height: 50}} />}
      /> */}
      <FAB
        icon={<Image source={Images.AddIcon} style={{width: 50, height: 50}} />}
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ticketMain: {
    paddingHorizontal: 25,
    paddingTop: 37,
    backgroundColor: "#fff",
    height: "100%",
    position: "relative",
  },
  fab: {
    position: "absolute",
    // margin: 16,
    right: 30,
    bottom: 100,
    zIndex: 111,
    width: 60, height: 60, borderRadius: 50,
    backgroundColor: COLORS.secondary,
  },
});
export default MyTicket;
