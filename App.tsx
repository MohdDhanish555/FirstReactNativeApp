import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import CameraScreen from "./screens/CameraScreen";
import ContactModal from "./components/ContactModal";
import { AppProvider } from "./context/AppContext";
import ContactsStackScreen from "./screens/ContactsStackScreen";
import AlbumStackScreen from "./screens/AlbumStackScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <>
        <ContactModal />

        <View style={styles.header}>
          <Text style={styles.headerText}>MY APP</Text>
        </View>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Contacts">
            <Tab.Screen name="Camera" component={CameraScreen} />
            <Tab.Screen name="Contacts" component={ContactsStackScreen} />
            <Tab.Screen name="Album" component={AlbumStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    padding: 9,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
