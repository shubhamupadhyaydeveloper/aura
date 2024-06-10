import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const DATA = [
  { title: 'Antelope Canyon', illustration: 'https://i.imgur.com/UYiroysl.jpg' },
  { title: 'NYC Morning', illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
  { title: 'White Pocket Sunset', illustration: 'https://i.imgur.com/MABUbpDl.jpg' },
  { title: 'Acrocorinth, Greece', illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
  { title: 'Majestic Landscape', illustration: 'https://i.imgur.com/2nCt3Sbl.jpg' },
];

type props = {
  item : {
     title :string,
     illustration : string
  }
}

const { width: screenWidth } = Dimensions.get('window');

const CarouselItem = ({ item }:props) => (
  <View style={styles.item}>
    <Image source={{ uri: item.illustration }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const Trending = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        height={screenWidth / 2}
        data={DATA}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => <CarouselItem item={item} />}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});
