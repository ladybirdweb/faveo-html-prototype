import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Screens-bottom-tabs/Home";
import Analytics from "../screens/Analytics";
import Notification from "../screens/notification/Notification";
import MyTicket from "../screens/auth/MyTicket";
import Contact from "../screens/contact/Contact";
import Account from "../screens/auth/Account/AccountSetting";

const Stack = createNativeStackNavigator();

const MyTicketTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackTicket" component={MyTicket} />
    </Stack.Navigator>
  );
};

const ContactTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackContacts" component={Contact} />
    </Stack.Navigator>
  );
};

const AnalyticsTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackAnalytics" component={Analytics} />
    </Stack.Navigator>
  );
};

const NotificationTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackNotification" component={Notification} />
    </Stack.Navigator>
  );
};

const AccountTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackAccount" component={Account} />
    </Stack.Navigator>
  );
};

export {
  MyTicketTabStack,
  ContactTabStack,
  AnalyticsTabStack,
  NotificationTabStack,
  AccountTabStack,
};
