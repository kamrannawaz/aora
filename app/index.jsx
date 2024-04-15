import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import {StatusBar} from "expo-status-bar"
import {redirect,router} from 'expo-router'

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] -mt-1"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px] -mt-2"
            resizeMode="contain"
          />
        <View className="relative mt-2">
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain"/>
        </View>
        <Text className="text-sm font-pregular text-gray-100 mt-3 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
        <CustomButton title="Continue with Email" handlePress={()=>router.push('/sign-in')} containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});