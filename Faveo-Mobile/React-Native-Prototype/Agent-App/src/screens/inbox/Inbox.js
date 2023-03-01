import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import MenuHeaderComponent from "../../components/MenuHeaderComponent";
import TicketComponent from "../../components/TicketComponent";
import { FAB } from "react-native-paper";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterComponent from "../../components/FilterComponent";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";

const Inbox = () => {
  const navigation = useNavigation();
  const [showFabModal, setShowFabModal] = useState(false);

  const handleFabIcon = () => {
    setShowFabModal((prev) => !prev);
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
          icon={showFabModal ? Images.CrossWhite : Images.PlusWhite}
          style={styles.fab}
          onPress={handleFabIcon}
          color={COLORS.white}
        />
        <Modal
          isVisible={showFabModal}
          onBackdropPress={() => setShowFabModal(false)}
          style={styles.fabModal}
          backdropOpacity={0.5}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.rowValue}>
              <Image source={Images.NewContact} style={styles.iconStyle}/>
              <Text style={styles.newText}>New contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowValue}>
              <Image source={Images.NewEmail} style={styles.iconStyle} />
              <Text style={styles.newText}>New email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowValue}>
              <Image source={Images.NewServiceTask} style={styles.iconStyle} />
              <Text style={styles.newText}>New service task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rowValue, {marginBottom: 0}]}>
              <Image source={Images.NewTicket} style={styles.iconStyle} />
              <Text style={styles.newText}>New ticket</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    right: 30,
    bottom: 100,
    zIndex: 111,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
  },
  fabModal: {
    position: "absolute",
    right: 20,
    bottom: 150,
    zIndex: 111,
    width: 208,
    backgroundColor: COLORS.secondary,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  rowValue: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  iconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  newText: {
    fontSize: 16,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.white,
    marginLeft: 15,
  },
});
export default Inbox;
