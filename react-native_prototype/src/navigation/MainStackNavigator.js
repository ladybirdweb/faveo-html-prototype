import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Url from "../screens/auth/Url";
import SignIn from "../screens/auth/SignIn";
import ChangeLanguage from "../screens/auth/ChangeLanguage";
import FaveoAccount from "../screens/auth/FaveoAccount";
import MyTicket from "../screens/auth/MyTicket";
import ContactMemberProfile from "../screens/auth/ContactsDictionary/ContactMemberProfile";
import SearchComponent from "../components/SearchComponent";
import AllOrganization from "../screens/auth/AllOrganization/AllOrganization";
import UserList from "../screens/auth/AllOrganization/UserList";
import Userdetails from "../screens/auth/AllOrganization/Userdetails";
import ContactsDictionary from "../screens/auth/ContactsDictionary/ContactsDictionary";
import AccountSetting from "../screens/auth/Account/AccountSetting";
import TicketComponent from "../components/TicketComponent";
import TicketNotification from "../screens/auth/Account/TicketNotification";
import AppLock from "../screens/auth/Account/AppLock";
import About from "../screens/auth/Account/About";
import NotificationSchedule from "../screens/auth/Account/NotificationSchedule";
import ChangePassword from "../screens/auth/Account/ChangePassword";
import Profile from "../screens/auth/Account/profile";
import Feedback from "../screens/auth/Account/Feedback";
import Contact from "../screens/contact/Contact";
import ContactProfile from "../screens/contact/ContactProfile";
// import Profile from "../screens/auth/Account/Profile";
// import Profile from "../screens/auth/Account/profile";
import DrawerNavigator from "./DrawerNavigator";
import Home from "../screens/Screens-bottom-tabs/Home";
import Notification from "../screens/notification/Notification";
import Analytics from "../screens/Analytics";
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
      <Stack.Screen name="SearchComponent" component={SearchComponent} />
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
      <Stack.Screen name="MyTicket" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
