import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HallOfFame from '../components/home/hallOfFame';
import Photos from '../components/home/photos';
import Follow from '../components/home/follow';
import Music from '../components/music';
import Entypo from 'react-native-vector-icons/Entypo';
import ShopMerch from '../components/shopMerch';

export default function Home() {
  const scroll = useRef(new Animated.Value(0)).current;
  return (
    <Animated.ScrollView
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroll}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}
      style={{flex: 1}}>
      <View style={styles.bannerContainer}>
        <Animated.Image
          style={styles.banner(scroll)}
          source={require('../assets/polo-g-hero.png')}
        />
        <LinearGradient
          colors={['#ffffff', 'transparent']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.heroSection}>
          <Text style={styles.headerText}>Polo G</Text>
          <View style={styles.actionButtons}>
            <Ionicons
              name="ios-shuffle"
              size={28}
              color="#000"
              style={styles.icon}
            />
            <Ionicons
              name="play"
              size={28}
              color="#fff"
              style={{...styles.icon, backgroundColor: '#109fd9'}}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.container}>
        <HallOfFame />
        <Photos />
        <Music />
        <ShopMerch />
        <Follow />
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: scroll => ({
    height: 510,
    width: '100%',
    transform: [
      {
        translateY: scroll.interpolate({
          inputRange: [-510, 0, 510, 510 + 1],
          outputRange: [-510 / 2, 0, 510 * 0.75, 510 * 0.75],
        }),
      },
      {
        scale: scroll.interpolate({
          inputRange: [-510, 0, 510],
          outputRange: [1, 1, 1.2],
        }),
      },
    ],
    opacity: scroll.interpolate({
      inputRange: [0, 510],
      outputRange: [1, 0.7],
    }),
    marginTop: 50,
  }),
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#ffffff',
    marginTop: -120,
    padding: 15,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 35,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
  },
  actionButtons: {
    flexDirection: 'row',
    borderColor: '#109fd9',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  icon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  container: {
    // paddingHorizontal: 15,
    backgroundColor: '#fffeff',
  },
});
