import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images, { DownArrow } from "../../constants/Images";
import ButtonComponent from "../../components/ButtonComponent";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontFamily from "../../constants/FontFamily";
import { List } from "react-native-paper";
const InboxDetails = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  const [expanded, setExpanded] = React.useState(false);
  const [boxVisible, setboxVisible] = React.useState(true);

  const handlePress = () => {
    setExpanded(!expanded);
    setboxVisible(false);
  };
  const onPressDownArrow = () => {
    setExpanded(false);
    setboxVisible(true);
  };

  const IconView = (props) => {
    return (
      <View style={styles.letterCircle}>
        <Text style={styles.letter}>D</Text>
      </View>
    );
  };
  const ForwardIcon = () => {
    return (
      <View>
        <Image source={Images.Forword} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.main} edges={["top", "bottom"]}>
      <View style={styles.topView}>
        <TouchableOpacity onPress={onPressBack} style={styles.onpressTouch}>
          <Image source={Images.BackArrow} style={styles.backArrow} />
        </TouchableOpacity>
        <View style={styles.rightView}>
          <Image source={Images.edit} style={styles.editIcon} />
          <Image source={Images.threedot} />
        </View>
      </View>
      <View style={styles.overdueView}>
        <ButtonComponent
          title="Overdue"
          customStyle={styles.buttonComponentStyle}
          labelCustomStyle={styles.overdueLabel}
        />
      </View>
      <View style={styles.openView}>
        <Text style={styles.openText}>Open</Text>
        <Image source={Images.Mail} style={styles.mailIcon} />
      </View>

      <Text style={styles.responseText}>
        First response due 11 days ago Overdue since 9 days ago
      </Text>
      {boxVisible && (
        <TouchableOpacity
          style={styles.priorityEscalationStatusContainer}
          onPress={handlePress}
        >
          <View style={styles.overduezz}>
            <Text style={styles.lowText}></Text>
            <Text style={styles.low}>Low</Text>
          </View>
          <View style={styles.blank}>
            <Text style={{}}>
              <Image source={Images.AddUser} />
            </Text>
            <Text style={styles.escalat}>Escalations / ---</Text>
          </View>
          <View style={styles.bottomView}>
            <Text>
              <Image source={Images.OpenArrow} />
            </Text>
            <Text style={styles.open}>Open</Text>
          </View>
          <Image source={Images.DownArrow} style={{width: 18, height: 18, resizeMode: 'contain'}} />
        </TouchableOpacity>
      )}
      {expanded && (
        <View style={styles.downArrowContainer}>
          <TouchableOpacity
            style={styles.downArrowView}
            onPress={onPressDownArrow}
          >
            <Text style={styles.downArrowText}>Properties</Text>
            <Image source={Images.DownArrow} style={{width: 18, height: 18, resizeMode: 'contain'}}/>
          </TouchableOpacity>

          <View>
            <Text style={styles.headingText}>Priority</Text>
            <TouchableOpacity style={styles.lowView}>
              <View style={styles.colorFullCircle}></View>
              <Text style={styles.textView}>Low</Text>
              <Image source={Images.DownArrow} style={{width: 18, height: 18, resizeMode: 'contain', marginLeft: 10}}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingText}>Group & Agent</Text>
            <TouchableOpacity style={styles.lowView}>
              {/* <View style={styles.colorFullCircle}></View> */}
              <Text style={styles.textViews}>Escalations / --</Text>
              <Image source={Images.DownArrow} style={{width: 18, height: 18, resizeMode: 'contain', marginLeft: 10}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingText}>Status</Text>
            <TouchableOpacity style={styles.lowView}>
              <Text style={styles.textViews}>Open</Text>
              <Image source={Images.DownArrow} style={{width: 18, height: 18, resizeMode: 'contain', marginLeft: 10}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingText}>Type</Text>
            <TouchableOpacity style={styles.lowView}>
              <Text style={styles.textViews}>Question</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingText}>Tags</Text>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: "90%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.mainText]}>Critical</Text>
                <Text style={[styles.mainText]}>Bug</Text>
                <Text style={[styles.mainText]}>Support</Text>
                <Text style={[styles.mainText]}>Department</Text>
                <Text style={[styles.mainText]}>+2</Text>
              </View>
              <Image
                source={Images.DownArrow}
                style={{width: 18, height: 18, resizeMode: 'contain', justifyContent: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headingText}>Label</Text>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: "90%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.mainText]}>Critical</Text>
                <Text style={[styles.mainText]}>Bug</Text>
                <Text style={[styles.mainText]}>Support</Text>
                <Text style={[styles.mainText]}>Department</Text>
                <Text style={[styles.mainText]}>+2</Text>
              </View>
              <Image
                source={Images.DownArrow}
                style={{width: 18, height: 18, resizeMode: 'contain', justifyContent: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View>
        <List.Section>
          <List.Accordion
            title="Deepak Sharma"
            description="December 1, 2022 06:31 PM"
            left={(props) => <List.Icon icon={IconView} />}
            right={() => <List.Icon icon={DownArrow} />}
            titleStyle={styles.userName}
            descriptionStyle={styles.mailDate}
            style={{
              backgroundColor: "#f1f1f1",
              paddingLeft: 0,
              paddingRight: 0,
              borderBottomColor: COLORS.secondary,
              borderBottomWidth: 0.5,
            }}
          >
            <View style={{ paddingLeft: 0 }}>
              <View style={styles.mailDiscriptionView}>
                <Text>Hi,</Text>
                <Image source={Images.Backward} />
              </View>
              <Text style={{ marginVertical: 10 }}>
                The television I ordered from your site was delivered with a
                cracked screen. I need some help with a refund or a replacement.
              </Text>
              <Text>Here is the order number FD07062010</Text>
              <Text style={{ marginTop: 10 }}>Thanks,</Text>
              <Text>Sarah</Text>
            </View>
          </List.Accordion>
        </List.Section>
      </View>
      <View style={styles.replyForwardBox}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image source={Images.ReplyGray} style={{ width: 18, height: 18 }} />
          <Text style={{ marginTop: 3 }}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image
            source={Images.AddNoteGray}
            style={{ width: 18, height: 18 }}
          />
          <Text style={{ marginTop: 3 }}>Add note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Image source={Images.Backward} style={{ width: 18, height: 18 }} />
          <Text style={{ marginTop: 3 }}>Forward</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingBottom: 35,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  rightView: {
    flexDirection: "row",
  },
  editIcon: {
    marginRight: 20,
  },
  overdueView: {
    marginTop: 35,
  },
  buttonComponentStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.red,
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: 100,
  },
  overdueLabel: {
    color: COLORS.red,
  },
  openView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  mailIcon: {
    width: 16.5,
    height: 12,
  },
  responseText: {
    marginTop: 9,
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  openText: {
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  letterCircle: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FontFamily.NunitoBold,
  },
  mailConatiner: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mailContendLeft: {
    marginLeft: 15,
  },
  mailView: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    color: "#031021",
    fontFamily: FontFamily.PTSansBold,
  },
  mailDate: {
    fontSize: 16,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  mailDiscriptionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  priorityEscalationStatusContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#dadada",
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  overduezz: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  low: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  blank: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  escalat: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  bottomView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  open: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    marginLeft: 5,
  },
  lowText: {
    backgroundColor: "#1F0FD6",
    width: 8,
    height: 8,
    borderRadius: 50,
  },
  downArrowContainer: {
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  downArrowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  downArrowText: {
    color: COLORS.secondary,
    fontSize: 15,
    fontFamily: FontFamily.NunitoBold,
  },
  lowView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  lowViews: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
  },
  mainText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
    backgroundColor: "#C1C1C1",
    padding: 2,
  },
  colorFullCircle: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 50,
  },
  textView: {
    marginLeft: 5,
    fontSize: 15,
    color: COLORS.secondary,
    fontFamily: FontFamily.PTSansRegular,
  },
  textViews: {
    fontSize: 15,
    color: COLORS.secondary,
    fontFamily: FontFamily.PTSansRegular,
  },
  headingText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansBold,
    color: COLORS.secondary,
    marginTop: 20,
  },
  replyForwardBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#dcdcdc",
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 20,
    elevation: 10,
  },
});
export default InboxDetails;
