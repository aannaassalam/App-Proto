import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {View, Text, StyleSheet, Pressable} from 'react-native';
function CustomTab({state, navigation}) {
  console.log(state.index);
  // let col = state.index === 0 ? '#ff9679' : '#2A2A2C';
  // let textCol = state.index === 0 ? '#ff9679' : '#2A2A2C';

  return (
    <View
      style={{
        ...styles.tabar,
        backgroundColor: state.index === 0 ? '#fefefe' : '#fefefe',
      }}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('home')}>
        <Ionicons
          name={state.index === 0 ? 'home' : 'home-outline'}
          size={20}
          color={state.index === 0 ? '#ff9679' : '#2a2a2c'}
        />
        <Text
          style={{
            ...styles.text,
            color: state.index === 0 ? '#ff9679' : '#2a2a2c',
          }}>
          Home
        </Text>
      </Pressable>
      {/* <Pressable style={styles.container}>
        <Ionicons name="location-outline" size={20} color={col} />
        <Text style={{...styles.text, color: textCol}}>Maps</Text>
      </Pressable> */}
      <Pressable style={styles.container}>
        <Ionicons name="stats-chart-outline" size={20} color="#2a2a2c" />
        <Text style={{...styles.text, color: '#2a2a2c'}}>Dashboard</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('getReviews')}>
        <Octicons
          name={state.index === 1 ? 'star-fill' : 'star'}
          size={20}
          color={state.index === 1 ? '#ff9679' : '#2a2a2c'}
        />
        <Text
          style={{
            ...styles.text,
            color: state.index === 1 ? '#ff9679' : '#2a2a2c',
          }}>
          Get Reviews
        </Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('settingsStack')}>
        <Ionicons
          name={state.index === 2 ? 'settings' : 'settings-outline'}
          size={20}
          color={state.index === 2 ? '#ff9679' : '#2a2a2c'}
        />
        <Text
          style={{
            ...styles.text,
            color: state.index === 2 ? '#ff9679' : '#2a2a2c',
          }}>
          Settings
        </Text>
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
    backgroundColor: '#fff',
    borderTopColor: '#eee',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
