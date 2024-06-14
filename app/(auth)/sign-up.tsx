import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedTextInput from "@/components/shared/SharedTextInput";
import { Link } from "expo-router";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpschema } from "@/helpers/type";
import { signUpFields } from "@/helpers/constant";
import SharedButton from "@/components/shared/SharedButton";
import {router} from 'expo-router'

const SignUp = () => {
  const {
    formState: { errors,isSubmitting },
    control,
    handleSubmit,
    reset
  } = useForm({ resolver: zodResolver(SignUpschema) });
  
  const onSubmit = async (data:FieldValues) => {
    try {
      const request = await fetch("http://192.168.1.109:3000/user/signup",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })     
      const response = await request.json()
      console.log(response)
    } catch (error:any) {
       Alert.alert("signup failed", error?.message)
    } finally {
       reset()
    }
  };

  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex justify-center items-start h-full px-3 mx-auto">
              <View className="flex gap-1 flex-row items-center justify-center ">
                <Image source={require("../../assets/images/icon.png")} />
                <Text className="text-[34px] font-pbold text-white">Aora</Text>
              </View>
              <Text className="text-white font-psemibold text-[22px] mt-2">
                Sign up
              </Text>

              <View className="flex flex-col gap-2 mt-5 items-start justify-center">
                {signUpFields.map((item) => (
                  <Controller
                    key={item.name}
                    name={item.name}
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                      <SharedTextInput
                        placeholder={item.placeholder}
                        label={item.label}
                        keyboardType={item.keyboardType}
                        errorText={errors[item.name]?.message}
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                      />
                    )}
                  />
                ))}
                <SharedButton handleOnPress={handleSubmit(onSubmit)} text="Sign Up" classname="mt-5" disabled={isSubmitting} />
              </View>

              <View className="flex flex-row justify-center items-center w-full gap-1 mt-2">
                <Text className="text-[#CDCDE0] text-[14px]">
                  Already have an account?
                </Text>
                <Text className="text-[#FF9001] font-semibold text-[14px]">
                  <Link href="/sign-in">Login</Link>
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
