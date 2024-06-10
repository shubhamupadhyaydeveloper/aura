import { router } from "expo-router";
import { View, Text, Image } from "react-native";

const EmptyState = ({ title, subtitle }: {title : string,subtitle:string}) => {
  return (
    <View className="flex justify-center items-center px-4 bg-[#161622] pb-5" >
      <Image
        source={require("@/assets/images/EmptyState.png")}
        resizeMode="contain"
        className="w-[270px] h-[216px]"
      />

      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>

    </View>
  );
};

export default EmptyState;