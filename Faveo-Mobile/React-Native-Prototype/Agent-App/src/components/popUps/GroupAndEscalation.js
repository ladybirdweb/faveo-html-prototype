import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomRadio from "../CustomRadio";

const GroupAndEscalation = () => {
  const [isSelected, setIsSelected] = useState(0);
  // };
  let testLabel = ["Assign To Me", "Group", "Agents"];
  return (
    <View style={styles.mainContainer}>
      {testLabel.map((item, idx) => (
        <CustomRadio
          item={item}
          index={idx}
          onPress={() => setIsSelected(idx)}
          isSelected={isSelected}
        />
      ))}
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
  check: {
    width: 21,
    height: 16,
  },
});

export default GroupAndEscalation;
