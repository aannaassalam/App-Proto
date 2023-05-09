import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {View, Text, StyleSheet, Pressable} from 'react-native';
function CustomTab({state, navigation}) {
  let col = state.index === 0 ? '#2A2A2C' : '#c3c4ca';
  let textCol = state.index === 0 ? '#2A2A2C' : '#c3c4ca';

  return (
    <View
      style={{
        ...styles.tabar,
        backgroundColor: state.index === 0 ? '#fefefe' : '#222328',
      }}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('home')}>
        <Ionicons name="home-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Home</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="film-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Videos</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.container,
          padding: 4,
          borderColor: '#454A53',
          borderRadius: 999,
          borderWidth: 1,
        }}>
        <View style={styles.videoButtton}>
          <Ionicons
            name="play"
            size={30}
            color="#F9F8FF"
            style={{position: 'relative', left: 2}}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('photos')}>
        <Octicons name="stack" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Photos</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="musical-notes" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Music</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  tabar: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#C3C4Ca',
    marginTop: 3,
    fontSize: 12,
  },
  videoButtton: {
    backgroundColor: '#454A53',
    padding: 7,
    borderRadius: 999,
  },
});
export default CustomTab;
