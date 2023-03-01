import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import FontFamily from "../../constants/FontFamily";
import SearchComponent from "../SearchComponent";
import SelectComponent from "../SelectComponent";
import Images from "../../constants/Images";

const CannedResponse = (props) => {
  const { title, placeholder, isCanned, isSuggest } = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.cannedText}>{title}</Text>
      <View style={{ marginTop: 30 }}>
        <SearchComponent placeholder={placeholder} />
        {/* ............ Folders View............. */}
        {isCanned && (
          <>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.folderText}>Folders:</Text>
              <SelectComponent />
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity style={styles.requestReceivedContainer}>
                <Text style={styles.requestReceivedText}>
                  We’ve received your request
                </Text>
                <Image
                  source={Images.FileUpload}
                  style={{ width: 15, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {isSuggest && (
          <View style={styles.suggestContainer}>
            <Image
              source={Images.SearchIllustration}
              style={styles.illustrationImage}
              resizeMode="contain"
            />
            <Text style={styles.noSuggestText}>No suggested solutions</Text>
          </View>
        )}
      </View>
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
  cannedText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
  },
  folderText: {
    fontSize: 18,
    fontFamily: FontFamily.NunitoBold,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  requestReceivedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    borderColor: COLORS.alto,
    borderWidth: 1,
    borderRadius: 5,
  },
  requestReceivedText: {
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
    color: COLORS.secondary,
  },
  suggestContainer: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    height: 131,
    width: 131,
  },
  noSuggestText: {
    marginTop: 5,
    color: COLORS.secondary,
    fontSize: 15,
    fontFamily: FontFamily.PTSansRegular,
  },
});

export default CannedResponse;
