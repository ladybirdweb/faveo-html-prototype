import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../constants/Colors";
import Images from "../../constants/Images";
import FontFamily from "../../constants/FontFamily";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketComponent from "../../components/TicketComponent";
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { profileTabData } from "../../constants/String";
import ModalComponent from "../../components/ModalComponent";
import EditContact from "../../components/popUps/EditContact";
import NewTicket from "../../components/popUps/NewTicket";
import NewServiceTicket from "../../components/popUps/NewServiceTicket";

const FirstRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 25 }}
  >
    <View style={{ marginTop: 15 }}>
      {profileTabData.map((elm, idx) => {
        return (
          <View key={idx} style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 20,
                fontFamily: FontFamily.PTSansBold,
              }}
            >
              {elm.label}
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 20,
                fontFamily: FontFamily.PTSansRegular,
                marginTop: 10,
              }}
            >
              {elm.value}
            </Text>
          </View>
        );
      })}
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex:1, backgroundColor: COLORS.white, paddingHorizontal: 0 }}>
    <View style={{ alignItems: "center", height: "100%", width:'100%' }}>
      {/* ............. NO TICKET IMAGE.............. */}
        <Image
          source={Images.noTickets}
          style={{ width: 150, height: 135, marginTop: 70 }}
          resizeMode="contain"
        />
        {/* ..............TICKET LIST AVAILABLE............... */}
      <View> 
        <TicketComponent onPress={()=>{}}/>
      </View>
    </View>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const ContactProfile = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [editContactModalVisible, setEditContactModalVisible] = useState(false);
  const [newTicketModalVisible, setNewTicketModalVisible] = useState(false);
  const [newServiceTicketModalVisible, setNewServiceTicketModalVisible] = useState(false);
  const [routes] = useState([
    { key: "first", title: "Profile" },
    { key: "second", title: "Ticket" },
  ]);
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={{ paddingHorizontal: 20, height: "25%" }}>
        <View style={styles.topView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={Images.BackWhite} />
          </TouchableOpacity>
          <View style={styles.profileLetterContainer}>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 30,
                fontFamily: FontFamily.NunitoBold,
              }}
            >
              B
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{setEditContactModalVisible(true)}}>
            <Image source={Images.wedit} />
          </TouchableOpacity>
        </View>

        <View style={styles.bobTree}>
          <Text style={styles.bobTreeView}>Bob Tree</Text>
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>{setNewTicketModalVisible(true)}}>
              <Image source={Images.PLUS} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.CALL} style={styles.margin} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNewServiceTicketModalVisible(true)}}>
              <Image source={Images.Service} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: "75%", backgroundColor: COLORS.white }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: COLORS.white, elevation: 0 }}
              labelStyle={{
                color: COLORS.secondary,
                textTransform: "capitalize",
                fontSize: 18,
                fontFamily: FontFamily.NunitoBold,
              }}
              indicatorStyle={{ backgroundColor: COLORS.primary, height: 2 }}
              activeColor={COLORS.primary}
              pressColor="transparent"
            />
          )}
        />
      </View>
      <ModalComponent isVisible={editContactModalVisible} onCancel={()=>{setEditContactModalVisible(false)}} customStyles={{height:"95%"}} isCross={true} children={<EditContact />} />

      <ModalComponent isVisible={newTicketModalVisible} onCancel={()=>{setNewTicketModalVisible(false)}} customStyles={{height:"95%"}} isCross={true} children={<NewTicket />} />

      <ModalComponent isVisible={newServiceTicketModalVisible} onCancel={()=>{setNewServiceTicketModalVisible(false)}} customStyles={{height:"95%"}} isCross={true} children={<NewServiceTicket />} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: "100%",
    width: "100%",
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bobTree: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileLetterContainer: {
    width: 55,
    height: 55,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    flexDirection: "row",
    marginTop: 20,
  },
  margin: {
    marginHorizontal: 20,
  },
  bobTreeView: {
    fontSize: 22,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.white,
    marginTop: 15,
  },
});
export default ContactProfile;
