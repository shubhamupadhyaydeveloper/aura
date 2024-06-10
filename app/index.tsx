import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import SharedButton from "@/components/shared/SharedButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const OnboardPage = () => {
  const { width, height } = useWindowDimensions();
  const handlePress = ()  => {
    router.push("/sign-in")
  }

  return (
    <SafeAreaView className="bg-[#161622]">
      <ScrollView contentContainerStyle={{height : "100%"}}>

      <View className="h-screen text-white px-2 items-center justify-center">
        <View className="flex gap-1 flex-row items-center justify-center ">
          <Image source={require("../assets/images/icon.png")} />
          <Text className="text-[34px] font-pbold text-white">Aora</Text>
        </View>
        <View className="flex items-center justify-center mt-1">
          <Image
            source={require("../assets/images/Onboarding-img.png")}
            style={{ width: width * 0.9, height: height * 0.4 }}
          />
        </View>
        <View className="flex items-center gap-1 mt-3">
          <Text className={`text-[27px] text-white font-psemibold -mb-5`}>
            Discover Endless
          </Text>
          <Text className="text-[27px] text-white font-psemibold">
            Possibilities with{" "}
            <Text className="text-[27px] text-[#FF8E01] font-psemibold">
              Aora
            </Text>             
          </Text>
        </View>
        <Text className="text-[14px] font-pregular text-center text-[#CDCDE0] mb-5 mt-2">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <SharedButton text="Continue with Email" handleOnPress={handlePress} />
      </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default OnboardPage;
