import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FacebookScreen from "./screens/FacebookScreen";
import InstagramScreen from "./screens/InstagramScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Facebook" component={FacebookScreen} />
        <Tab.Screen name="Instagram" component={InstagramScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
