import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {View, Text, StyleSheet, Pressable} from 'react-native';
function CustomTab() {
  const [tab, settab] = React.useState(0);
  let col = tab === 0 ? '#2A2A2C' : '#c3c4ca';
  let textCol = tab === 0 ? '#2A2A2C' : '#c3c4ca';
  return (
    <View
      style={{
        ...styles.tabar,
        backgroundColor: tab === 0 ? '#fefefe' : '#222328',
      }}>
      <Pressable style={styles.container} onPress={() => settab(0)}>
        <Ionicons name="home-outline" size={23} color={col} />
        <Text style={{...styles.text, color: textCol}}>Home</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="film-outline" size={23} color={col} />
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
      <Pressable style={styles.container} onPress={() => settab(4)}>
        <Octicons name="stack" size={23} color={col} />
        <Text style={{...styles.text, color: textCol}}>Photos</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Ionicons name="musical-notes" size={23} color={col} />
        <Text style={{...styles.text, color: textCol}}>Music</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  tabar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
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
