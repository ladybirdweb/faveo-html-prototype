import React from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { NativeBaseProvider } from "native-base";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useFlipper } from "@react-navigation/devtools";

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
