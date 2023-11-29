import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

function SettingStackNav({heading}) {
  return (
    <View style={styles.navbar}>
      {/* <Feather name="chevron-left" size={30} color="#333" style={styles.dots} /> */}
      <Octicons name="bell-fill" size={23} color="transparent" />
      <Text style={styles.heading}>{heading}</Text>
      <View style={{position: 'relative'}}>
        <Octicons name="bell-fill" size={23} color="#333" style={styles.bell} />
        <Text
          style={{
            backgroundColor: '#5BB7D5',
            color: '#fff',
            position: 'absolute',
            top: -2,
            width: 10,
            height: 10,
            lineHeight: 14,
            right: 17,
            fontSize: 10,
            borderRadius: 100,
          }}></Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    margin: 5,
    marginBottom: 10,
    // backgroundColor: 'transparent',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 3,
    // fontWeight: '700',
  },
  bell: {
    marginRight: 20,
  },
});
export default SettingStackNav;
