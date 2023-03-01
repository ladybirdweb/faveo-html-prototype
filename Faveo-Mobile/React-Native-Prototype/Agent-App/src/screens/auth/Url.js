import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import InputComponent from "../../components/InputComponent";
import Images from "../../constants/Images";
import { Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/ButtonComponent";
import ModalComponent from "../../components/ModalComponent";
import AllLogs from "../../components/popUps/AllLogs";
import SearchBy from "../../components/popUps/SearchBy";
import DueDate from "../../components/popUps/DueDate";
import SelectScenario from "../../components/popUps/SelectScenario";
import AddTickets from "../../components/popUps/AddTickets";
import InboxGroupDropdown from "../../components/popUps/InboxGroupDropdown";
import MergeTicket from "../../components/popUps/MergeTicket";
import EditTicket from "../../components/popUps/EditTicket";
import Reply from "../../components/popUps/Reply";
import {
  emailDropDown,
  groupDropDown,
  priorityPopupData,
  replyPopupData,
  searchBy,
  statusPopupData,
  threeDots,
} from "../../constants/String";
import ClosePopup from "../../components/popUps/ClosePopup";

const Url = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const onPressChangeLanguage = () => {
    navigation.navigate("ChangeLanguage");
  };
  const onPressForgot = () => {
    //  navigation.navigate('ContactMemberProfile');
  };
  const onPressNext = () => {
    navigation.navigate("SignIn");
  };

  // const handleModal = () => setModalVisible((prev) => !prev);

  return (
    <ImageBackground
      source={Images.UrlBG}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView edges={["top", "bottom"]} style={styles.mainContainer}>
        <View>
          <Image
            source={Images.Logo}
            style={styles.logoStyle}
            resizeMode="contain"
          />
        </View>
        <Box
          style={styles.boxStyle}
          shadow="7"
          px="5"
          m="0"
          alignSelf="center"
          width="80%"
          height="419"
          borderRadius="md"
          borderWidth="0"
          bg="white"
        >
          <TouchableOpacity
            style={{ alignItems: "flex-end" }}
            onPress={onPressChangeLanguage}
          >
            <Text style={styles.languageText}>Change Language</Text>
          </TouchableOpacity>
          <InputComponent label={"Faveo URL"} placeHolder="faveoapp.com" />
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginTop: 20 }}
            onPress={onPressForgot}
          >
            <Text style={styles.languageText}>Forgot faveo URL?</Text>
          </TouchableOpacity>
          <ButtonComponent title="Next" onPress={onPressNext} />
        </Box>
        {/* .......Temporary call for testing........ */}
        {/* for searchBy popup */}
        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"35%"}} isCross={true} children={<SearchBy list={searchBy} heading="Search By" />} /> */}

        {/* for Group popup */}
        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"50%"}} isCross={true} children={<SearchBy list={groupDropDown} heading="Group"/>} /> */}

        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"85%"}} isCross={true}  children={<DueDate />} /> */}
        {/* <ModalComponent isVisible={handleModal}  isCross={true} children={<SelectScenario />} /> */}
        {/* <ModalComponent isVisible={handleModal}  isCross={true} children={<InboxGroupDropdown />} /> */}
        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"85%"}} isCross={true} children={<AddTickets />} /> */}
        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"95%"}}  isCross={true} children={<EditTicket />} /> */}
        {/* <ModalComponent isVisible={handleModal} isCross={true} customStyles={{height:"98%"}} children={<Reply />} /> */}
        {/* <ModalComponent isIcon={true} isVisible={handleModal} customStyles={{height:"85%"}} isCross={true} children={<MergeTicket />} /> */}
        {/* <ModalComponent isVisible={handleModal} customStyles={{height:"35%"}} isCross={false} children={<ClosePopup />} /> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    width: 200,
    height: 100,
  },
  languageText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: FontFamily.NunitoBold,
    marginBottom: 54,
  },
  boxStyle: {
    paddingTop: 25,
    marginTop: 35,
  },
});

export default Url;
