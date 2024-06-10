import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Alert,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type props = {
  placeholder: string;
  value?:string;
  onChange?: (value:string) => void;
  onBlur? : () => void;
};

const SharedSearchInput = ({ placeholder,value,onChange ,onBlur}: props) => {
  const { width } = useWindowDimensions();
  const router = useRouter()
  const onClick = () => {
    if(!value){
      Alert.alert('input something')
      return;
    }
    router.push(`/search/${value}`)
  } 
  return (
    <View className="flex flex-row items-center  bg-[#232533] mt-2 py-[9px] rounded-[8px]">
      <TextInput
        className="text-[#FFFFFF] font-psemibold pl-2"
        style={{ width: width * 0.8 }}
        placeholderTextColor={"#CDCDE0"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
      />
      <TouchableOpacity className=" " activeOpacity={0.6} onPress={onClick}>
        <Image source={require("@/assets/images/serach.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SharedSearchInput;
