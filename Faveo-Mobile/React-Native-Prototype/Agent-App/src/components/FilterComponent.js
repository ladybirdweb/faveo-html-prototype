import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../constants/Images";
import COLORS from "../constants/Colors";
import FontFamily from "../constants/FontFamily";
import { useDisclose } from "native-base";
import {
  Popover,
  Button,
  Box,
} from "native-base";

const FilterComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const { isOpen, onClose, onOpen } = useDisclose();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [showPopOver, setShowPopOver] = React.useState(false);
  return (
    <View>
      <View style={styles.ticketSection}>
        <View style={styles.ticketLeft}>
          <Image source={Images.Sort} style={styles.sortImage} />
          <Text style={styles.dataCreated}>Date Created</Text>
        </View>
        <TouchableOpacity>
          <Box w="100%" alignItems="center">
            <Popover
              isOpen={showPopOver}
              onClose={!showPopOver}
              trigger={(triggerProps) => {
                return (
                  <Button
                    {...triggerProps}
                    backgroundColor={"transparent"}
                    onPress={() => setShowPopOver(true)}
                  >
                    <Image source={Images.Filter} style={styles.filter} />
                  </Button>
                );
              }}
            >
              <Popover.Content
                accessibilityLabel="Delete Customerd"
                w="56"
                marginRight={5}
                style={{ marginTop: 60 }}
              >
                <Popover.Arrow style={{ marginTop: 48 }} />
                <Popover.Body>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>All Tickets</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>All Unresolved Tickets</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>New & My Open Tickets</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>Ticket I Requested</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>Ticket I'm Watching</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>Ticket I'm mentioned in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>My Open and Pending Tickeets</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>My Overdue Tickets</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>Open Tickets in my Groups</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPopOver(false);
                    }}
                    style={styles.optionStyle}
                  >
                    <Text>Urgent and High Priority tickets</Text>
                  </TouchableOpacity>
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </Box>
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
    zIndex: 1,
  },
  sortImage: {
    width: 19,
    height: 18,
  },
  filter: {
    width: 30,
    height: 30,
  },
  optionStyle: {
    width: "100%",
    paddingBottom: 10,
  },
});
export default FilterComponent;
