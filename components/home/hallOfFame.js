import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HallOfFame() {
  return (
    <View style={styles.hall_of_fame}>
      {/* <View styles={styles.hall_of_fame_image}> */}
      <Text
        style={{
          backgroundColor: 'transparent',
          color: '#333',
          position: 'absolute',
          bottom: 0,
          // width: 100,
          textAlign: 'center',
          fontWeight: 700,
          left: 0,
          right: 0,
          // paddingVertical: 1,
          paddingHorizontal: 10,
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
          letterSpacing: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        Privy Score
      </Text>
      <View style={styles.progress_container}>
        <View style={styles.progress}>
          {Array.from({length: 46})
            .fill(0)
            .map((_item, index) => {
              return index < 37 ? (
                <LinearGradient
                  colors={['#7666c5', '#9c8bde']}
                  start={{x: 1, y: 1}}
                  end={{x: 0, y: 0}}
                  style={styles.progress_bar}>
                  <View />
                </LinearGradient>
              ) : (
                <View style={styles.progress_grey} />
              );
            })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hall_of_fame: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginHorizontal: 15,
    position: 'relative',
  },
  hall_of_fame_image: {
    width: 110,
    height: 110,
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
  progress_container: {
    marginTop: 15,
    marginBottom: 35,
    width: '95%',
    borderRadius: 30,
    // backgroundColor: '#ccc',
  },
  progress: {
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
  },
  progress_bar: {
    height: 45,
    width: 4,
    // backgroundColor: '#fff',
    marginHorizontal: 2,
  },
  progress_grey: {
    height: 45,
    width: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
});
