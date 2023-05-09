import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Ionicons
        name="ios-search-outline"
        size={28}
        color="#333"
        style={styles.search}
      />
      <View style={styles.row}>
        <SimpleLineIcons
          name="bell"
          size={25}
          color="#333"
          style={styles.bell}
        />
        <Entypo
          name="dots-three-horizontal"
          size={25}
          color="#333"
          style={styles.dots}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  bell: {
    marginRight: 20,
  },
});
