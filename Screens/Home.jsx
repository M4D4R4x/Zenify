import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Meditation from "./Meditation";
import Tasks from "./Tasks";
import Ionicons from "react-native-vector-icons/Ionicons";
import Session from "../components/Session";

import DisplayStats from "../components/DisplayStats";

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Meditation"
      activeColor="#008bbe"
      barStyle={{ backgroundColor: "black" }}
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen
        name="Meditation"
        component={Meditation}
        options={{
          
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-body" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        
        options={{
          
          tabBarColor: "#121212",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Focus"
        component={Session}
        options={{
          tabBarLabel: "Focus",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-hourglass-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={DisplayStats}
        options={{
          tabBarColor: "#121212",
          tabBarLabel: "Stats",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-stats-chart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
