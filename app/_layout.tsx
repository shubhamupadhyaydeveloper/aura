import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";;
import { Button } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Black" : require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold" : require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold" : require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLightItalic" : require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Regular" : require("../assets/fonts/Poppins-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="profile"
          options={{
            headerStyle: { backgroundColor: "#03AED2" },
            headerTitleStyle: { color: "#EEF7FF" },
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" />
      </Stack>
    </ThemeProvider>
  );
}
