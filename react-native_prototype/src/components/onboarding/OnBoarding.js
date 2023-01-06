import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import OnBoardingItem from "./OnBoardingItem";
import Images from "../../constants/Images";
import Paginator from "./Paginator";
import ButtonComponent from "../ButtonComponent";
import COLORS from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    id: "1",
    icon: Images.Splash1,
    titleMain: "Ensure you stay focused on your\ngoals for the day",
    titleContent:
      "Quick swipe actions help you manage\nincoming tickets faster",
    splash: Images.SplashBG3,
  },
  {
    id: "2",
    icon: Images.Splash2,
    titleMain: "Improve the speed of your resolutions",
    titleContent: "Utilize bulk actions to handle\nmultiple ticks at once",
    splash: Images.SplashBG1,
  },
  {
    id: "3",
    icon: Images.Splash3,
    titleMain: "Contextualize the ticket in its entirety",
    titleContent:
      "Update relevant information about\nconversations and view them in detail",
    splash: Images.UrlBG,
  },
];

const onBoarding = () => {
  const navigation = useNavigation()
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChange = useRef(({ viewableItems }) => {
    setCurrent(viewableItems[0].index);
  }).current;
  const {width} = useWindowDimensions(); 

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onNext = () => {
    const nextSlideIndex = current + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      slidesRef?.current.scrollToOffset({offset});
      setCurrent(current + 1);
    }
  }

  const navigationToUrl = () => {
    navigation.navigate('URL')
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <OnBoardingItem item={item} slidesData={slides} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChange}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          
          ref={slidesRef}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "20%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paginator data={slides} scrollX={scrollX} current={current} />
        {current == slides.length - 1 ? (
           <Text style={styles.getStartBtn}>
            <ButtonComponent
              title="Get Started"
              customStyle={{
                backgroundColor: COLORS.secondary,
                paddingHorizontal: 16,
              }}
              onPress={navigationToUrl}
            />
          </Text>
        ) : (
          <TouchableOpacity style={{ marginTop: 39 }} onPress={onNext}>
            <Image source={Images.NextArrow} style={styles.nextArrow} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: {
    width: 60,
    height: 60,
  },
  getStartBtn: {
    marginTop: 44,
  },
});

export default onBoarding;
