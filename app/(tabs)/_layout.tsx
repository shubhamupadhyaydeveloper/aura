import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  Octicons,
  Fontisto,
  Entypo,
  Foundation,
  FontAwesome5
} from "@expo/vector-icons";
import * as SystemUI from 'expo-system-ui';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {  SystemUI.setBackgroundColorAsync("#000")},[])


  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: colorScheme === "light" ? "#DC5F00" : "#ffffff",
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarLabelStyle: {
        fontSize: 11,
        fontWeight: "400",
      },
      tabBarStyle: {
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0,
        paddingTop: 8,
        paddingBottom :  2,
        backgroundColor : "#000"
      },
      headerShown: false,
      
      }}>
      <Tabs.Screen
        name='profile'
        options={{
          title : "Profile",
          tabBarIcon : ({color}) => (
            <Ionicons color={color} size={21} name='person' />
          )
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Foundation color={color} size={24} name='home' />
          ),
        }}
      />
  
      <Tabs.Screen
        name='create'
        options={{
          title : "Create",
          tabBarIcon : ({color}) => (
            <Ionicons color={color} size={24} name='add-circle' />
          ),
        }}
      />


      <Tabs.Screen
        name='saved'
        options={{
          title : "Saved",
          tabBarIcon : ({color}) => (
            <MaterialIcons color={color} size={20} name='save' />
          )
        }}
      />
    </Tabs>
  );
}
