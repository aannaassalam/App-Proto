import React, {useRef, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HallOfFame from '../components/home/hallOfFame';
import Photos from '../components/home/photos';
import Follow from '../components/home/follow';
import Music from '../components/music';
import Entypo from 'react-native-vector-icons/Entypo';
import ShopMerch from '../components/shopMerch';
import MusicAlbums from '../components/musicAlbums';
import MusicVideos from '../components/musicVideos';
import Gallery from '../components/gallery';
import Footer from '../components/home/footer';
import Navbar from '../components/navbar';

export default function Home({navigation}) {
  const scroll = useRef(new Animated.Value(0)).current;
  const height = Dimensions.get('window').height * 0.65;

  return (
    <>
      <Navbar scroll={scroll} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}
        style={{flex: 1}}>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scroll, height)}
            source={require('../assets/payal.png')}
          />
          <LinearGradient
            colors={['#ffffff', 'transparent']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={styles.heroSection}>
            <View>
              <Text style={styles.headerText}>Payal Dhare</Text>
              <Text style={styles.caption}>Gaming</Text>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.rating}>
                <Text style={styles.rating_text}>4.0</Text>
              </View>
              <LinearGradient
                colors={['#F45536', '#DF406C']}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Ionicons
                  name="star"
                  size={25}
                  color="#fff"
                  style={{...styles.icon}}
                />
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.container}>
          {/* <HallOfFame /> */}
          <Photos navigation={navigation} />
          <Music />
          <ShopMerch />
          <MusicAlbums />
          <MusicVideos />
          <Follow />
          <Gallery />
          <Footer navigation={navigation} />
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: (scroll, height) => ({
    height: height,
    width: '100%',
    transform: [
      {
        translateY: scroll.interpolate({
          inputRange: [-height, 0, height, height + 1],
          outputRange: [-height / 2, 0, height * 0.75, height * 0.75],
        }),
      },
      {
        scale: scroll.interpolate({
          inputRange: [-height, 0, height],
          outputRange: [1, 1, 1.2],
        }),
      },
    ],
    opacity: scroll.interpolate({
      inputRange: [0, height],
      outputRange: [1, 0.7],
    }),
    marginTop: 50,
  }),
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#f2f3e7',
    marginTop: -130,
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
    borderColor: '#DF406C',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  icon: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  container: {
    // paddingHorizontal: 15,
    backgroundColor: '#fffeff',
  },
  rating: {
    paddingHorizontal: 10,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating_text: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
  },
  bannerContainer: {
    // backgroundColor: '#f2f3e7',
    backgroundColor: 'rgba(246, 177, 158, 0.2)',
  },
  caption: {
    color: '#909090',
    fontSize: 16,
    marginTop: -10,
    fontFamily: 'Poppins-Medium',
  },
});
