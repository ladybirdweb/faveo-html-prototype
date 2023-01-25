import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { Switch, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackHeaderComponent from "../../components/BackHeaderComponent";

const TicketNotification = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={styles.ticketNotificationMain}
      edges={["top", "bottom"]}
    >
      <BackHeaderComponent title="Ticket notification" onPress={onPressBack} />
      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 30, height: "95%" }}
        >
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Reminders on first response
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Reminders on resolution time
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Escalations on first response
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Escalations on resolution time
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              New responses on my tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Status updates on my tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Private notes i’m tagged in
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Public notes i’m tagged in
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
              Tickets assigned to me
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
            Tickets assigned to my groups
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
            New tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
            New tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
            New tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>

          <View style={styles.ticketNotificationBox}>
            <Text style={styles.ticketNotificationHeading}>
            New tickets
            </Text>
            <VStack>
              <Switch size="md" />
            </VStack>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ticketNotificationMain: {
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  allOrganizationContainer: {
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  allOrganizationTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.secondary,
    paddingBottom: 10,
  },
  allOrganizationHeading: {
    fontSize: 22,
    fontFamily: FontFamily.NunitoSemiBold,
    color: COLORS.secondary,
  },
  ticketNotificationBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
  },
  ticketNotificationHeading: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
});

export default TicketNotification;
