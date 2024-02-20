import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Insert" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="words/index"
        options={{ headerShown: false, title: "Words" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="practice/index"
        options={{ headerShown: false, title: "Practice" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
