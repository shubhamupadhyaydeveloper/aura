import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useWindowDimensions,ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


type props = {
  text: string;
  route?: string;
  handleOnPress? : () => void;
  classname? : string;
  disabled? : boolean
};

const SharedButton = ({ text, route ,  handleOnPress,classname,disabled }: props) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7} className={classname} disabled={disabled} >
      <LinearGradient colors={["#FF8C00","#FFA300"]} style={[styles.button,{ width: width * 0.9 }]}>
        <Text className="text-[#151515] text-center font-psemibold text-[16px]">{ disabled ? "Loading..." : text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SharedButton;

const styles = StyleSheet.create({
  button : {
    marginHorizontal : 'auto',
    padding: 10,
    borderRadius : 8,
  }
});
