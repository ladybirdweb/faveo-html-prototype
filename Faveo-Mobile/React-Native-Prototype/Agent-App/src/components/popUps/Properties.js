import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import FontFamily from "../../constants/FontFamily";
import COLORS from "../../constants/Colors";
import ButtonComponent from "../ButtonComponent";
import InputComponent from "../InputComponent";
import { propertiesData } from "../../constants/String";

const Properties = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.headingStyle}>Properties</Text>
        <ScrollView style={{ height: "95%" }}>
          {propertiesData.map((elm, idx) => {
            return (
              <View key={idx} style={{ marginTop: elm.height ? 0 : 20 }}>
                <Text style={styles.contact}> {elm.label}</Text>
                <View
                  style={{
                    width: elm.height ? "90%" : "96%",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomColor: COLORS.secondary,
                      borderBottomWidth: 1,
                      height: 40,
                    }}
                  >
                    <InputComponent
                      variant="unstyled"
                      placeHolder={elm.placeholder}
                      customStyles={{
                        fontSize: 15,
                        color: COLORS.secondary,
                        fontFamily: FontFamily.PTSansBold,
                      }}
                    />
                    <TouchableOpacity>
                      <Image
                        style={{
                          height: elm.height ?? 10,
                          width: elm.width ?? 6,
                          marginRight: 10,
                        }}
                        source={elm?.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={styles.labelTagContainer}>
            <Text>Label</Text>
            <View style={styles.labelsTagsRow}>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Critical</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Bug</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Support</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Department</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>+1</Text>
              </View>
            </View>
          </View>

          <View style={styles.labelTagContainer}>
            <Text>Tag</Text>
            <View style={styles.labelsTagsRow}>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Critical</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Bug</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Support</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>Department</Text>
              </View>
              <View style={styles.labelsTagsBox}>
                <Text style={styles.labelsTagsValueText}>+1</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    paddingVertical: 36,
  },
  headingStyle: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 30,
    fontFamily: FontFamily.NunitoExtraBold,
    color: COLORS.secondary,
    fontSize: 20,
  },
  searchContact: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  contact: {
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
    fontSize: 15,
  },
  labelTagContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    width: "100%",
    paddingBottom: 10,
    marginTop: 20,
  },
  labelsTagsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 12,
  },
  labelsTagsBox: {
    backgroundColor: "#EAEAEA",
    padding: 3,
    borderRadius: 5,
    marginRight: 5,
  },
  labelsTagsValueText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
});
export default Properties;
