import { Text, View, StatusBar } from "react-native";
import { Link } from "expo-router";
import React from "react";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack"> Aora</Text>
      <StatusBar barStyle="dark-content" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
