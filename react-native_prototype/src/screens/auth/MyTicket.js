import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import MenuHeaderComponent from "../../components/MenuHeaderComponent";
import TicketComponent from "../../components/TicketComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { Fab } from "native-base";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterComponent from "../../components/FilterComponent";


const MyTicket = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.ticketMain} edges={['top', 'bottom']}>
      <MenuHeaderComponent
        title="My Tickets"
        onPressIcon={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      <FilterComponent />
      <TicketComponent />
      <Fab
        renderInPortal={false}
        shadow={4}
        size={38}
        icon={<Icon name="plus" size={20} />}
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
  },
});
export default MyTicket;
