import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function HallOfFame() {
  return (
    <View style={styles.hall_of_fame}>
      <View style={styles.hall_of_fame_image}>
        <Image
          source={require('../../assets/polo-g-hall-of-fame.jpg')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
        <Text
          style={{
            backgroundColor: '#109fd9',
            color: '#fff',
            position: 'absolute',
            top: 0,
            left: 0,
            // paddingVertical: 1,
            paddingHorizontal: 10,
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            letterSpacing: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          FEATURED
        </Text>
      </View>
      <View style={styles.hall_of_fame_details}>
        <Text
          style={{
            ...styles.hall_of_fame_text,
            color: '#000',
            // fontFamily: 'Poppins-Regular',
            fontSize: 16,
          }}>
          Hall of Fame
        </Text>
        <Text style={styles.hall_of_fame_text}>3 December, 2022</Text>
        <Text style={styles.hall_of_fame_text}>12 songs</Text>
      </View>
      <Entypo
        name="dots-three-horizontal"
        size={25}
        color="#555"
        style={{marginRight: 15}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hall_of_fame: {
    flexDirection: 'row',
    backgroundColor: '#f5f3f5',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  hall_of_fame_image: {
    width: 110,
    height: 110,
    position: 'relative',
  },
  hall_of_fame_details: {
    padding: 15,
    marginRight: 'auto',
  },
  hall_of_fame_text: {
    // marginBottom: 3,
    color: '#555',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
