import {
  View,
  Image,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import Images from "../../constants/Images";

const Paginator = (props) => {
  const { data, scrollX, current } = props;
  const { width } = useWindowDimensions();

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [5, 5, 5],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  backgroundColor:
                    i === current ? COLORS.primary : COLORS.secondary,
                },
              ]}
              key={i.toString()}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 5,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 2.5,
    borderRadius: 50,
  },
});

export default Paginator;
