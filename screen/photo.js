import React from 'react';
import Slick from 'react-native-slick';
import {View, Text, StyleSheet, Image} from 'react-native';
import image1 from '../assets/polo-g-photos-1.jpg';
import image2 from '../assets/polo-g-photos-2.jpg';
import image3 from '../assets/polo-g-photos-3.jpg';
import image4 from '../assets/polo-g-photos-4.jpg';
import image5 from '../assets/polo-g-photos-5.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

function Photo() {
  return (
    <View style={styles.body}>
      <Slick
        style={styles.slider}
        showsButtons={false}
        autoplay={false}
        horizontal={false}
        dotStyle={{display: 'none'}}
        activeDotStyle={{display: 'none'}}
        loop={true}>
        {[image1, image2, image3, image4, image5].map((img, id) => (
          <View style={styles.slide} key={id}>
            <Image style={styles.sliderImage} source={img} />
            <View style={styles.actionIcons}>
              <View style={styles.flexContainer}>
                <Ionicons name="heart" size={32} color="#fff" />
                <Text style={styles.iconContent}>22.3K</Text>
              </View>
              <View style={styles.flexContainer}>
                <Ionicons name="chatbox-ellipses" size={32} color="#fff" />
                <Text style={styles.iconContent}>3K</Text>
              </View>
              <View style={styles.flexContainer}>
                <Ionicons name="share" size={34} color="#fff" />
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>Polo G</Text>
              <Text style={styles.desc}>
                Some test description for shorts...
              </Text>
              <Text style={styles.desc}>0:35</Text>
            </View>
            <LinearGradient
              colors={['transparent', '#00000050']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        ))}
      </Slick>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
  },
  sliderImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  actionIcons: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    zIndex: 99,
  },
  iconContent: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 0,
  },
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  },
  details: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    alignItems: 'flex-start',
    zIndex: 99,
  },
  name: {
    color: '#F9F8FF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginBottom: 10,
  },
  desc: {
    color: '#F9F8FF',
    fontSize: 12,
  },
});
export default Photo;
