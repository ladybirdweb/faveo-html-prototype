import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Images from "../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/Colors";
import BackHeaderComponent from "../components/BackHeaderComponent";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import SearchComponent from "../components/SearchComponent";
import FontFamily from "../constants/FontFamily";

const FirstRoute = () => (
  <View style={styles.ticketTabContainer}>
    <Image
      source={Images.SearchIllustration}
      resizeMode="contain"
      style={styles.illustrationImage}
    />
    <Text style={styles.illustrationText}>
      We hope you find what you are{"\n"}looking for
    </Text>
  </View>
);

const SecondRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 0 }}
  ></View>
);

const ThirdRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 0 }}
  ></View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Search = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Tickets" },
    { key: "second", title: "Contacts" },
    { key: "third", title: "Solutions" },
  ]);

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top", "bottom"]}>
      <View style={{ marginHorizontal: 25, paddingBottom: 5 }}>
        <BackHeaderComponent title="Search" />
      </View>
      <View style={{ height: "75%", backgroundColor: COLORS.white }}>
        <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
          <SearchComponent />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: COLORS.white, elevation: 0 }}
              labelStyle={{
                color: COLORS.secondary,
                textTransform: "capitalize",
                fontSize: 18,
                fontFamily: FontFamily.NunitoBold,
              }}
              indicatorStyle={{ backgroundColor: COLORS.primary, height: 2 }}
              activeColor={COLORS.primary}
              pressColor="transparent"
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  ticketTabContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    height: 131,
    width: 131,
  },
  illustrationText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: FontFamily.PTSansRegular,
    marginTop: 5,
  },
});
export default Search;
