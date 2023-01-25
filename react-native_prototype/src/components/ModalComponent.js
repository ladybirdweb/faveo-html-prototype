import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import COLORS from "../constants/Colors";
import Images from "../constants/Images";

const ModalComponent = (props) => {
  const { children, isVisible, customStyles, isCross, isIcon } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={800}
        animationOutTiming={800}
        hasBackdrop={true}
        backdropColor={"black"}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={{ margin: 0 }}
      >
        <View style={[styles.childrenContainer, customStyles]}>
          {children}
          {isCross && (
            <TouchableOpacity
              style={!isIcon ? styles.crossIconContainer : styles.leftIcon}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Image source={Images.cross} style={styles.crossIcon} />
            </TouchableOpacity>
          )}
          {isIcon && (
            <View style={styles.plusView}>
              <Image source={Images.PlusIcon} />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  childrenContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  crossIconContainer: {
    alignSelf: "flex-end",
    marginTop: 36,
    marginRight: 20,
  },
  leftIcon: {
    alignSelf: "flex-start",
    marginTop: 36,
    marginRight: 20,
    marginLeft: 25,
  },
  crossIcon: {
    width: 30,
    height: 30,
  },
  plusView: {
    position: "absolute",
    // left:0,
    top: 45,
    right: 25,
    width: 30,
    height: 30,
  },
  PlusIcon:{
    width:11.91,
    height:11.91,
    color:COLORS.secondary,
  }
});

export default ModalComponent;
