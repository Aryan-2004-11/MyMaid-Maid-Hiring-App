import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Maids from "./Explore/maids";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/card";
import MaidsList from "./Explore/maids";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Tab = createMaterialTopTabNavigator();

function General() {
  const [articles, setArticles] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <SafeAreaView style={{ flex: 0.12, backgroundColor: "#0089e3" }}>
        <Text
          style={{
            color: "white",
            fontSize: 27,
            paddingTop: 20,
            padding: 10,
            fontWeight: "bold",
            // fontStyle: "italic",
            top: 25,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="arrow-back-circle" size={32} color="white" />
          Explore Maids
        </Text>
      </SafeAreaView>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen
          name="Search"
          component={MaidsList}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {" "}
                Maids Near You{" "}
              </Text>
            ),
          }}
        />
        {/* <Tab.Screen
          name="Home"
        //   component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 15, fontWeight: "bold" }}> HOME </Text>
            ),
          }}
        /> */}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default General;
