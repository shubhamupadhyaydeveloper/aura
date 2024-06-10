import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  PermissionsAndroid,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid
} from "react-native";
import { useWindowDimensions } from "react-native";
import { launchCamera } from 'react-native-image-picker';

type Titem = {
  id: string;
  content: string;
};

const Data: Titem[] = [
  {
    id: "1",
    content: "item1",
  },
  {
    id: "2",
    content: "item2",
  },
  {
    id: "3",
    content: "item3",
  },
  {
    id: "4",
    content: "item4",
  },
  {
    id: "5",
    content: "item5",
  },
  {
    id: "6",
    content: "item6",
  },
  {
    id: "7",
    content: "item7",
  },
  {
    id: "8",
    content: "item8",
  },
  {
    id: "9",
    content: "item9",
  },
  {
    id: "10",
    content: "item10",
  },
  {
    id: "11",
    content: "item11",
  },
  {
    id: "12",
    content: "item6",
  },
  {
    id: "13",
    content: "item6",
  },
  {
    id: "14",
    content: "item6",
  },
  {
    id: "15",
    content: "item6",
  },
  {
    id: "16",
    content: "item6",
  },
  {
    id: "17",
    content: "item6",
  },
  {
    id: "18",
    content: "item6",
  },
  {
    id: "19",
    content: "item6",
  },
  {
    id: "20",
    content: "item6",
  },
  {
    id: "21",
    content: "item6",
  },
  {
    id: "22",
    content: "item6",
  },
  {
    id: "24",
    content: "item6",
  },
  {
    id: "25",
    content: "item6",
  },
  {
    id: "26",
    content: "item6",
  },
  {
    id: "27",
    content: "item6",
  },
  {
    id: "28",
    content: "item6",
  },
  {
    id: "29",
    content: "item6",
  },
];

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};


const Item = ({ content }: { content: string }) => (
  <View>
    <Text>{content}</Text>
  </View>
);

const Profile = () => {
  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.TOP);
  };
  const [imageUri, setImageUri] = React.useState(null);
  
 
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ width, height });
  const [selectedId, setSelectedId] = useState<string>();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  

  return (
    <View style={styles.global}>
      <StatusBar backgroundColor="#ffffff" />
      <Text style={styles.text}>Hello this is my profile</Text>
      <ActivityIndicator size={"large"} color={"#DC5F00"} />
      <TextInput
        style={styles.input}
        keyboardType="visible-password"
        placeholder="mobile number"
      />
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item content={item.content} />}
        keyExtractor={item => item.id}
        extraData={selectedId}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
       <Button title="request permissions" onPress={requestCameraPermission} />
       <Button title="Toggle Toast" onPress={() => showToast()} />
    </View>
  );
};

export default Profile;

const createStyles = ({ width, height }: { width: number; height: number }) =>
  StyleSheet.create({
    global: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 12,
      padding: 10,
      width: width * 0.8,
    },
  });
