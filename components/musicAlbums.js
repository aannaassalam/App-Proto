import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import image1 from '../assets/polo-g-hall-of-fame.jpg';
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
        <Card img={image1} name="The Goat" year="2018" duration="33 min" />
        <Card img={image1} name="The Goat" year="2018" duration="33 min" />
        <Card img={image1} name="The Goat" year="2018" duration="33 min" />
      </View>
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
          More Albums
        </Text>
        <Feather name="chevron-right" size={30} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Albums: {
    paddingHorizontal: 15,
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
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
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    lineHeight: 20,
  },
});
export default MusicAlbums;
