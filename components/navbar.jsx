import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Navbar() {
  return (
    <View>
      <Ionicons name="ios-search-outline" />
      <View>
        <SimpleLineIcons name="bell" />
        <Entypo name="dots-three-horizontal" />
      </View>
    </View>
  );
}
