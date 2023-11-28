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
        <Ionicons name="location-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Maps</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="stats-chart-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Dashboard</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('reviews')}>
        <Octicons name="star" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Get Reviews</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('settingsStack')}>
        <Ionicons name="settings-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Settings</Text>
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
