import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
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
import Modal from "react-native-modal";

const Inbox = () => {
  const navigation = useNavigation();
  const [showFabModal, setShowFabModal] = useState(false);

  const handleFabIcon = () => {
    setShowFabModal((prev) => !prev);
    console.log("shreyansh");
  };

  return (
    <SafeAreaView style={styles.ticketMain} edges={["top", "bottom"]}>
      <MenuHeaderComponent
        title="Inbox"
        onPressIcon={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <FilterComponent />
      <TicketComponent
        onPress={() => {
          navigation.navigate("InboxDetails");
        }}
      />
      <>
        <FAB
          icon={showFabModal ? Images.PlusWhite : Images.cross}
          style={styles.fab}
          onPress={handleFabIcon}
          color={COLORS.white}
        />
        <Modal
          isVisible={showFabModal}
          onBackdropPress={() => setShowFabModal(false)}
          style={styles.fabModal}
          backdropOpacity={0}
        />
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ticketMain: {
    paddingHorizontal: 25,
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
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: COLORS.secondary,
  },
  fabModal: {
    position: "absolute",
    // margin: 16,
    right: 20,
    bottom: 150,
    zIndex: 111,
    width:  208,
    height: 194,
    // borderRadius: 50,
    backgroundColor: COLORS.secondary,
  },
});
export default Inbox;
