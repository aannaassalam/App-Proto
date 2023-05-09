import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {View, Text, StyleSheet, Pressable} from 'react-native';
function CustomTab({navigation}) {
  return (
    <View style={styles.tabar}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.push('Create Account')}>
        <Ionicons name="home-outline" size={23} color="#C3C4CA" />
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="film-outline" size={23} color="#C3C4CA" />
        <Text style={styles.text}>Videos</Text>
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
      <Pressable style={styles.container}>
        <Octicons name="stack" size={23} color="#C3C4CA" />
        <Text style={styles.text}>Photos</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="musical-notes" size={23} color="#C3C4CA" />
        <Text style={styles.text}>Music</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  tabar: {
    width: '100%',
    height: 70,
    backgroundColor: '#222328',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#C3C4Ca',
    marginTop: 5,
  },
  videoButtton: {
    backgroundColor: '#454A53',
    padding: 7,
    borderRadius: 999,
  },
});
export default CustomTab;
