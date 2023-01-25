import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Url from "../screens/auth/Url";
import SignIn from "../screens/auth/SignIn";
import ChangeLanguage from "../screens/auth/ChangeLanguage";
import FaveoAccount from "../screens/auth/FaveoAccount";
import MyTicket from "../screens/auth/MyTicket";
import ContactMemberProfile from "../screens/ContactsDictionary/ContactMemberProfile";
import AllOrganization from "../screens/AllOrganization/AllOrganization";
import UserList from "../screens/AllOrganization/UserList";
import Userdetails from "../screens/AllOrganization/Userdetails";
import ContactsDictionary from "../screens/ContactsDictionary/ContactsDictionary";
import AccountSetting from "../screens/Account/AccountSetting";
import TicketComponent from "../components/TicketComponent";
import TicketNotification from "../screens/Account/TicketNotification";
import AppLock from "../screens/Account/AppLock";
import About from "../screens/Account/About";
import NotificationSchedule from "../screens/Account/NotificationSchedule";
import ChangePassword from "../screens/Account/ChangePassword";
import Profile from "../screens/Account/profile";
import Feedback from "../screens/Account/Feedback";
import Contact from "../screens/contact/Contact";
import ContactProfile from "../screens/contact/ContactProfile";
import DrawerNavigator from "./DrawerNavigator";
import Home from "../screens/Screens-bottom-tabs/Home";
import Notification from "../screens/notification/Notification";
import Analytics from "../screens/Analytics";
import Inbox from "../screens/inbox/Inbox";
import InboxDetails from "../screens/inbox/InboxDetails";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="URL" component={Url} />
      <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="FaveoAccount" component={FaveoAccount} />
      <Stack.Screen name="AllOrganization" component={AllOrganization} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetails" component={Userdetails} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="ContactsDictionary" component={ContactsDictionary} />
      <Stack.Screen name="InboxDetails" component={InboxDetails} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="ContactMemberProfile"
        component={ContactMemberProfile}
      />
      <Stack.Screen name="TicketNotification" component={TicketNotification} />
      <Stack.Screen name="AppLock" component={AppLock} />
      <Stack.Screen
        name="NotificationSchedule"
        component={NotificationSchedule}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="ContactProfile" component={ContactProfile} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Inbox" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyTicket" component={MyTicket} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
