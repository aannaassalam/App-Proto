import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import image1 from '../assets/poloGphotos-1.jpg';
import image2 from '../assets/poloGphotos-2.jpg';
import image3 from '../assets/poloGphotos-3.jpg';
import image4 from '../assets/poloGphotos-4.jpg';
import image5 from '../assets/poloGphotos-5.jpg';
import Feather from 'react-native-vector-icons/Feather';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
function Gallery() {
  const [ScrollValue, setScrollValue] = useState(0);
  const width = event => {
    setScrollValue(event.nativeEvent.layout.width);
  };
  //   useEffect(() => {
  //     setInterval(() => {
  //       slide1.value = withTiming(ScrollValue, {
  //         duration: 20000,
  //       });
  //       slide2.value = withTiming(ScrollValue, {
  //         duration: 20000,
  //       });
  //     }, 20000);
  //   });
  const slide1 = useSharedValue(0);
  const slide2 = useSharedValue(0);
  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -slide1.value}],
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: slide1.value}],
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gallery</Text>
      <Animated.View
        style={[animatedStyles1, styles.Imagecontainer]}
        onLayout={e => width(e)}>
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
      </Animated.View>
      <Animated.View
        style={[animatedStyles2, styles.Imagecontainer, styles.transform]}
        onLayout={e => width(e)}>
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
        <Image style={styles.img} source={image1} />
        <Image style={styles.img} source={image2} />
        <Image style={styles.img} source={image3} />
        <Image style={styles.img} source={image4} />
        <Image style={styles.img} source={image5} />
      </Animated.View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#252525',
            fontWeight: '600',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 18,
          }}>
          Explore
        </Text>
        <Feather name="chevron-right" size={30} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
    paddingHorizontal: 15,
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
  },
  Imagecontainer: {
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 15,
    marginBottom: 15,
  },
});

export default Gallery;
