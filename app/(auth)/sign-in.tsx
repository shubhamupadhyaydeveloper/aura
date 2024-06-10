import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SharedButton from "@/components/shared/SharedButton";
import { Link } from "expo-router";
import {Controller, FieldValues, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import SharedTextInput from "@/components/shared/SharedTextInput";
import { SignInSchema } from "@/helpers/type";
import { signInFields } from "@/helpers/constant";
import { firebaseAuth } from "@/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import Toast from 'react-native-toast-message';

type state = {
  email : string,
  password : string
}

const SignIn = () => {
  const { width } = useWindowDimensions();
  const {formState :{errors,isSubmitting},control,handleSubmit,reset} = useForm({resolver : zodResolver(SignInSchema)})
  
  const onSubmit = async (data:FieldValues) => {
     try {
      const response = await signInWithEmailAndPassword(firebaseAuth,data['email'],data['password'])
      router.push("/home")
     } catch (error:any) {
      Toast.show({
        type: 'error',
        text1: 'invalid-email',
        position: 'bottom',
        visibilityTime: 1000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
     } finally {
      reset()
     }
  }

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
                Sign in
              </Text>
            
              <View className="flex flex-col gap-2 mt-5 items-start justify-center">
                {signInFields.map((item) => (
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
                <SharedButton handleOnPress={handleSubmit(onSubmit)} text="Sign In" classname="mt-5" disabled={isSubmitting} />
              </View>

              <View className="flex flex-row justify-center items-center w-full gap-1 mt-2">
                <Text className="text-[#CDCDE0] text-[14px]">
                  Don't have an account
                </Text>
                <Text className="text-[#FF9001] font-semibold text-[14px]">
                  <Link href="/sign-up">Signup</Link>
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <Toast />
    </SafeAreaView>
  );
};

export default SignIn;