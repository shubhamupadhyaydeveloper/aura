import EmptyState from "@/components/EmptyState";
import Trending from "@/components/Trending";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Image,
  View,
  Text,
  FlatList,
  ImageSourcePropType,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "@/helpers/constant";
import SharedSearchInput from "@/components/shared/SharedSearchInput";
import { useForm, Controller } from "react-hook-form";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  type ItemProps = {
    title: string;
    name: string;
    imgLink: ImageSourcePropType;
  };

  const { control,formState : {errors} } = useForm();

  const Item = ({ title, name, imgLink }: ItemProps) => (
    <View className="bg-[#161622] p-5 h-[40vh]">
      <View className="flex flex-row justify-between mb-2">
        <View className="flex">
          <Text className="text-[#FFFFFF] text-[15px] font-pbold ">
            {title}
          </Text>
          <Text className="text-[#CDCDE0] text-[12px] font-pregular">
            {name}
          </Text>
        </View>
        <Image source={require("@/assets/images/Group.png")} />
      </View>

      <Image source={imgLink} />
    </View>
  );

  return (
    <SafeAreaView className="bg-[#161622] pt-10 mb-[4vh]">
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} name={item.name} imgLink={item.imgLink} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View className="bg-[#161622] px-5">
            <View className="flex flex-row justify-between">
              <View className="flex">
                <Text className="text-[#CDCDE0] text-[14px] font-pregular -mb-2">
                  Welcome Back
                </Text>
                <Text className="text-[#FFFFFF] text-[24px] font-pbold">
                  jsmastery
                </Text>
              </View>
              <Image source={require("../../assets/images/icon.png")} />
            </View>

            <View>
              <Controller
                control={control}
                name="input"
                render={({ field: { value, onBlur, onChange } }) => (
                  <SharedSearchInput
                    placeholder="Search for video topic"
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </View>

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-md font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>
              <Trending />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
