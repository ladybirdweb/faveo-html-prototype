import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Image } from "react-native";
import {
  MyTicketTabStack,
  ContactTabStack,
  AnalyticsTabStack,
  NotificationTabStack,
  AccountTabStack,
} from "./StackNavigator";
import Images from "../constants/Images";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}
    >
      <Tab.Screen
        name="TabTicket"
        component={MyTicketTabStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarView}>
              {focused ?
              <Image
                source={Images.homeTabActive}
                style={styles.tabBarImage}
              />
              :
              <Image
                source={Images.homeTab}
                style={styles.tabBarImage}
                />
            }
            </View>
          )
        }}
      />
      <Tab.Screen name="TabContact" component={ContactTabStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarView}>
            {focused ?
            <Image
              source={Images.contactsTabActive}
              style={styles.tabBarImage}
            />
            :
            <Image
              source={Images.contactsTab}
              style={styles.tabBarImage}
              />
          }
          </View>
        )
      }}
      />
      <Tab.Screen name="TabAnalytics" component={AnalyticsTabStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarView}>
            {focused ?
            <Image
              source={Images.analyticsTabActive}
              style={styles.tabBarImage}
            />
            :
            <Image
              source={Images.analyticsTab}
              style={styles.tabBarImage}
              />
          }
          </View>
        )
      }}
      />
      <Tab.Screen name="TabNotification" component={NotificationTabStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarView}>
            {focused ?
            <Image
              source={Images.notificationTabActive}
              style={styles.tabBarImage}
            />
            :
            <Image
              source={Images.notificationTab}
              style={styles.tabBarImage}
              />
          }
          </View>
        )
      }}
      />
      <Tab.Screen name="TabAccount" component={AccountTabStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarView}>
            {focused ?
            <Image
              source={Images.accountTabActive}
              style={styles.tabBarImage}
            />
            :
            <Image
              source={Images.accountTab}
              style={styles.tabBarImage}
              />
          }
          </View>
        )
      }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarImage: {
    width: 25,
    height: 25,
  },
  tabBarStyle: {
    // backgroundColor: COLORS.HAWKESBLUE,
    height: 80,
    position: "absolute",
  },
  tabBarView: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: -spacing.xxs,
  },
  tabBarLabel: {
    fontSize: 10,
    // fontFamily: FontFamily,
    lineHeight: 13,
    top: 5,
  },
});

export default BottomTabNavigator;
