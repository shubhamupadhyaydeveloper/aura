import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  KeyboardTypeOptions,
} from "react-native";
import React from "react";

type Props = {
  label?: string;
  btnWidth?: number;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  errorText?: any;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  value?: string;
};

const SharedTextInput = ({
  label,
  btnWidth,
  placeholder,
  keyboardType,
  errorText,
  onChange,
  onBlur,
  value,
}: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View>
        <Text className="font-pregular text-[#CDCDE0] text-[16px]">
          {label}
        </Text>
        <TextInput
          className={`bg-[#232533] p-[16px] rounded-[8px] text-[16px] font-psemibold text-white`}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          style={{width : width *  .9}}
          keyboardType={keyboardType}
          secureTextEntry={label === "Password"}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
        <Text className="text-red-500 font-medium">{errorText}</Text>
    </View>
  );
};

export default SharedTextInput;
