import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import image1 from '../assets/polo-g-music-album-1.jpg';
import image2 from '../assets/polo-g-hall-of-fame.jpg';
import image3 from '../assets/polo-g-hall.jpg';
import image4 from '../assets/polo-g-die-a-legend.png';
const Card = ({img, name, year, duration}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.year}>{duration}</Text>
    </View>
  );
};
function MusicAlbums() {
  return (
    <View style={styles.Albums}>
      <Text style={styles.heading}>Music Albums</Text>
      <View style={styles.flexContainer}>
        <Card img={image1} name="The Goat" year="2018" duration="33 min" />
        <Card
          img={image2}
          name="Hall of Fame 2.0"
          year="2018"
          duration="27 min"
        />
        <Card img={image3} name="Hall of Fame" year="2018" duration="41 min" />
        <Card img={image4} name="Die a Legend" year="2018" duration="56 min" />
      </View>
      <View
        style={{
          marginTop: 10,
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
            fontSize: 16,
          }}>
          More Albums
        </Text>
        <Feather name="chevron-right" size={25} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Albums: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    // marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 170,
  },
  name: {
    color: '#161415',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    marginTop: 10,
  },
  year: {
    color: '#959295',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    lineHeight: 20,
  },
});
export default MusicAlbums;
