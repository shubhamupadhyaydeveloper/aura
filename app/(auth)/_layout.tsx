import React from 'react'
import { Stack } from 'expo-router';
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Alert, Text } from 'react-native';


const AuthLayout = () => {
  const colorScheme = useColorScheme();
  
  return (
     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
         <Stack>
           <Stack.Screen 
             name='sign-in'
             options={{headerShown : false}}
           />
           <Stack.Screen
             name='sign-up'
             options={{headerShown : false}}
           />
         </Stack>
     </ThemeProvider>
  )
}

export default AuthLayout;