import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import InputComponent from "../InputComponent";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Images from "../../constants/Images";
import ModalComponent from "../ModalComponent";
import SearchBy from "./SearchBy";
import { replyPopupData } from "../../constants/String";
import CannedResponse from "./CannedResponse";

const Reply = (props) => {
  const { title, isAddNote } = props;
  const [showReply, setShowReply] = useState(false);
  const [showDots, setShowDots] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [cannedResponseModalVisible, setCannedResponseModalVisible] =
    useState(false);
  const [suggestSolutionModalVisible, setSuggestSolutionModalVisible] = useState(false);
  const handleModal = () => setModalVisible((prev) => !prev);
  const onPressDots = () => {
    setShowReply(true);
    setShowDots(false);
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.replyContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.replyText}>{title}</Text>
        <Icon
          name="chevron-small-down"
          size={30}
          color={COLORS.primary}
          style={{ marginTop: 2 }}
        />
      </TouchableOpacity>
      {!isAddNote && (
        <>
          <View style={styles.fromBox}>
            <Text style={styles.fromToText}>From</Text>
            <View style={{ width: "75%" }}>
              <Text style={styles.emailIdText}>
                Support@infoxeron.faveo.com
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="dots-three-horizontal"
                size={20}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.toBox}>
            <Text style={styles.fromToText}>To</Text>
            <View style={{ width: "75%" }}>
              <Text style={[styles.emailIdText, { opacity: 0.5 }]}>
                Support@infoxeron.faveo.com
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="chevron-small-down"
                size={30}
                color={COLORS.primary}
                style={{ marginRight: -7 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.emailContentText, { marginTop: 15 }]}>
              Hi, Sarah James
            </Text>
            {showReply && (
              <View style={{ marginTop: 50 }}>
                <Text style={styles.emailContentText}>
                  On Thu, 10 Nov at 1:27 PM , Sarah James{"\n"}
                  <Text>{"<sarah.jamesfreshdesk.com>"}</Text> wrote: Hi,The
                  television I ordered from your site was delivered with a
                  cracked screen. I need some help with a refund or a
                  replacement.Here is the order number FD07062010
                </Text>
                <Text style={[styles.emailContentText, { marginTop: 50 }]}>
                  Thanks,{"\n"}Sarah
                </Text>
              </View>
            )}
            {showDots && (
              <TouchableOpacity
                style={styles.expandDotsIconContainer}
                onPress={onPressDots}
              >
                <Icon
                  name="dots-three-horizontal"
                  size={25}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
      <View style={{ marginTop: 25 }}>
        <Text style={styles.attachText}>1 Attachment(s):</Text>
        <View style={styles.attachBox}>
          <View style={styles.iconTextRow}>
            <Ionicons name="folder-outline" size={25} />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.imageName}>IMG_6519.PNG</Text>
              <Text style={styles.imageSize}>270 KB</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={Images.cross} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {isAddNote && (
        <View style={styles.addNoteMainContainer}>
          <View style={styles.notifyAgentBox}>
            <Text>Notify Agents</Text>
          </View>
          <View style={styles.visibleToCustomerBox}>
            <Text>Visible to Customer</Text>
            <Switch
              trackColor={{ false: "#767577", true: COLORS.primary }}
              thumbColor={COLORS.white}
              ios_backgroundColor={COLORS.primary}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      )}
      <View
        style={[isAddNote ? styles.addNoteBottomSection : styles.bottomSection]}
      >
        <View style={styles.editorContainer}>
          <View style={styles.editorIconsRow}>
            <TouchableOpacity
              onPress={() => {
                setCannedResponseModalVisible(true);
              }}
            >
              <MaterialCommunityIcon
                name="message-star-outline"
                size={25}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 25 }} onPress={()=>{setSuggestSolutionModalVisible(true)}}>
              <FeatherIcon
                name="book-open"
                size={25}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 25 }}>
              <FeatherIcon
                name="paperclip"
                size={22}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  color: COLORS.secondary,
                  fontFamily: FontFamily.NunitoBold,
                }}
              >
                A
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButtonContainer}>
            <Image source={Images.SendIcon} style={styles.sendIconStyle} />
            <Text style={styles.sendText}>Send</Text>
            <View style={styles.verticalLine}></View>
            <Icon name="chevron-small-down" size={30} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        customStyles={{ height: "25%" }}
        isCross={false}
        onCancel={() => setModalVisible(false)}
        children={<SearchBy list={replyPopupData} />}
      />

      <ModalComponent
        isVisible={cannedResponseModalVisible}
        customStyles={{ height: "95%" }}
        isCross={true}
        onCancel={() => setCannedResponseModalVisible(false)}
        children={<CannedResponse title="canned Responses"  isCanned={true}/>}
      />

<ModalComponent
        isVisible={suggestSolutionModalVisible}
        customStyles={{ height: "95%" }}
        isCross={true}
        onCancel={() => setSuggestSolutionModalVisible(false)}
        children={<CannedResponse title="Suggested Solutions"  isSuggest={true}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 25,
    height: "100%",
    width: "100%",
    paddingVertical: 36,
    position: "absolute",
    bottom: 0,
  },
  replyContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
  },
  replyText: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.primary,
  },
  fromBox: {
    borderTopColor: COLORS.secondary,
    borderTopWidth: 1,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52,
  },
  fromToText: {
    width: "12%",
    color: COLORS.lightGray,
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
  },
  emailIdText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansBold,
    color: COLORS.secondary,
  },
  toBox: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52,
  },
  emailContentText: {
    fontFamily: FontFamily.PTSansRegular,
    fontSize: 16,
    color: COLORS.secondary,
  },
  expandDotsIconContainer: {
    backgroundColor: "#DADADA",
    width: 65,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 50,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
    marginTop: 40,
  },
  addNoteBottomSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
    position: "absolute",
    bottom: 50,
    right: 0,
    left: 0,
    marginHorizontal: 20,
    // width: '100%',
  },
  editorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  editorIconsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sendButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: COLORS.primary,
    paddingLeft: 10,
    paddingRight: 5,
    borderRadius: 6,
  },
  sendIconStyle: {
    width: 22,
    height: 22,
  },
  sendText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FontFamily.PTSansRegular,
    marginLeft: 10,
  },
  verticalLine: {
    height: 30,
    width: 1,
    backgroundColor: COLORS.white,
    marginLeft: 7,
  },
  addNoteMainContainer: {
    borderTopColor: COLORS.secondary,
    borderTopWidth: 1,
    marginTop: 30,
  },
  notifyAgentBox: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  visibleToCustomerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  imageName: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: FontFamily.PTSansBold,
  },
  imageSize: {
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    marginTop: 5,
  },
  crossIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  attachText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  attachBox: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 15,
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Reply;
