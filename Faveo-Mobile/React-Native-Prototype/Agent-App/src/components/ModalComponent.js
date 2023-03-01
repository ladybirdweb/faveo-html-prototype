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
  const { children, isVisible, onCancel, customStyles, isCross, isIcon, isPlus, onPressIcon } = props;

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isVisible}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={800}
        animationOutTiming={800}
        hasBackdrop={true}
        backdropColor={"black"}
        onBackdropPress={onCancel}
        style={{ margin: 0 }}
      >
        <View style={[styles.childrenContainer, customStyles]}>
          {children}
          {isCross && (
            <TouchableOpacity
              style={!isIcon ? styles.crossIconContainer : styles.leftIcon}
              onPress={onCancel}
            >
              <Image source={Images.cross} style={styles.crossIcon} />
            </TouchableOpacity>
          )}
          {isIcon && (
            <TouchableOpacity style={styles.plusView} onPress={onPressIcon}>
              <Image source={isPlus ? Images.PlusIcon : Images.edit} />
            </TouchableOpacity>
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
    resizeMode: 'contain',
  },
  plusView: {
    position: "absolute",
    // left:0,
    top: 40,
    right: 25,
    width: 30,
    height: 30,
  },
  PlusIcon: {
    width: 11.91,
    height: 11.91,
    color: COLORS.secondary,
  }
});

export default ModalComponent;
