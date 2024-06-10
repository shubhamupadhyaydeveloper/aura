import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const profile = () => {
  return (
    <SafeAreaView>
      <View className="flex p-5 flex-col">
        <View className="flex items-end">
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={require("@/assets/images/logout.png")}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>
        <View className="flex items-center">
          <Image source={require("@/assets/images/avatar.png")}/>
          <Text className="text-white font-psemibold text-lg mt-2">jsmastery</Text>
          <View className="flex flex-row gap-5 mt-[5px]">
             <View className="flex flex-col">
                <Text className="text-white font-psemibold text-lg -mb-2">10</Text>
                <Text className="text-[#CDCDE0]">Posts</Text>
             </View>
             <View>
                <Text className="text-white font-psemibold text-lg -mb-2">1.2k</Text>
                <Text className="text-[#CDCDE0]">Views</Text>
             </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
