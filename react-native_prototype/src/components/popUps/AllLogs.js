import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import Images from "../../constants/Images";
import ButtonComponent from "../ButtonComponent";
import LogTime from "./LogTime";

const AllLogs = () => {
  const [isLogTime, setIsLogTime] = useState(false);
  return (
    <>
        {isLogTime ? <LogTime/> :
    <View style={styles.allLogWrapper}>
      <Text style={styles.headingStyle}>All Logs</Text>
      <View style={{ alignItems: "center" }}>
        <Image source={Images.noLogs} style={styles.illustrationImage} />
        <Text style={{ marginTop: 10 }}>No time logged</Text>
      </View>
      <ButtonComponent
        title="Add Log"
        customStyle={styles.addLogButton}
        onPress={() => {setIsLogTime(true)}}
      />
    </View>
}
    </>
  );
};

const styles = StyleSheet.create({
  allLogWrapper: {
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 36,
    alignItems: "center",
  },
  headingStyle: {
    textAlign: "center",
    marginTop: 5,
    fontFamily: FontFamily.NunitoExtraBold,
    color: COLORS.secondary,
    fontSize: 20,
  },
  illustrationImage: {
    width: 106,
    height: 154,
  },
  addLogButton: {
    width: "80%",
  },
});

export default AllLogs;
