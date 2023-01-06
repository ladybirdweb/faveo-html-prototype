import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import COLORS from "../constants/Colors";
import CustomDrawer from '../components/CustomDrawer';
import BottomTabNavigator from "./BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import MyTicket from "../screens/auth/MyTicket";
import { Text } from "native-base";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(navigation) => <CustomDrawer navigation={navigation} />}
      initialRouteName={"DrawerHome"}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          fontSize: 18,
          lineHeight: 22,
          marginLeft: -16,
          marginTop: 4,
        },
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: "80%",
        },
      }}
    >
      <Drawer.Screen name="DrawerHome" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
