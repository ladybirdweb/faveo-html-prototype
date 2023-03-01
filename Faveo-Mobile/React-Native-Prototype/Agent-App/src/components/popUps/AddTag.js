import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import InputComponent from "../InputComponent";
import Images from "../../constants/Images";
import ButtonComponent from "../ButtonComponent";

const AddTag = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          borderBottomColor: COLORS.secondary,
          borderBottomWidth: 0.8,
          paddingBottom: 12,
        }}
      >
        <Text style={styles.addTagText}>Add Tag</Text>
      </View>
      <View style={{ marginTop: 35 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: FontFamily.PTSansRegular,
            color: COLORS.secondary,
          }}
        >
          Add Tag
        </Text>
        <View
          style={{
            borderBottomWidth: 0.6,
            borderBottomColor: COLORS.secondary,
          }}
        >
          <InputComponent placeHolder="Search tag here" variant="unstyled" />
        </View>
        <View style={styles.tagsWrapper}>
          <View style={styles.selectedTag}>
            <Text style={styles.selectedText}>Selected Tag</Text>
            <TouchableOpacity style={{ paddingLeft: 8 }}>
              <Image
                source={Images.CrossCircleWhite}
                style={{ width: 15, height: 15 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.tagName}>
            <Text style={[styles.selectedText, { color: COLORS.secondary }]}>
              Tag Name
            </Text>
            <TouchableOpacity style={{ paddingLeft: 8 }}>
              <Image
                source={Images.cross}
                style={{ width: 15, height: 15 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ButtonComponent
        title="save"
        customStyle={styles.buttonStyle}
        onPress={() => {}}
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
  addTagText: {
    fontSize: 20,
    color: COLORS.secondary,
    fontFamily: FontFamily.NunitoBold,
  },
  tagsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    marginTop: 20,
  },
  selectedTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  selectedText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.white,
  },
  tagName: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gallery,
    paddingHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  buttonStyle: {
    width: "30%",
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    marginTop: 40,
  },
});
export default AddTag;
