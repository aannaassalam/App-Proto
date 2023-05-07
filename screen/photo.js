import React from 'react';
import Slick from 'react-native-slick';
import {View, Text, StyleSheet, Image} from 'react-native';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                <FontAwesome name="heart" size={30} color="#fff" />
                <Text style={styles.iconContent}>23.32K</Text>
              </View>
              <View style={styles.flexContainer}>
                <MaterialCommunityIcons
                  name="message-processing"
                  size={35}
                  color="#fff"
                />
                <Text style={styles.iconContent}>3K</Text>
              </View>
              <View style={styles.flexContainer}>
                <Ionicons name="share" size={35} color="#fff" />
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>James Bond</Text>
              <Text style={styles.desc}>
                Some test description for shorts...
              </Text>
              <Text style={styles.desc}>0:35</Text>
            </View>
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
    bottom: 50,
    right: 20,
  },
  iconContent: {
    color: '#fff',
    marginTop: 10,
  },
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  details: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    alignItems: 'flex-start',
  },
  name: {
    color: '#F9F8FF',
    fontSize: 25,
    marginBottom: 10,
  },
  desc: {
    color: '#F9F8FF',
    fontSize: 18,
  },
});
export default Photo;
