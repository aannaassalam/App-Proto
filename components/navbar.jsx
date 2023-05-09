import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Navbar({scroll}) {
  const isFloating = !!scroll;
  const [isTransparent, setIsTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scroll) return;
    const listenerId = scroll.addListener(a => {
      const topOffset = 510 - 50;
      isTransparent !== a.value < topOffset && setIsTransparent(!isTransparent);
    });
    return () => scroll.removeListener(listenerId);
  });

  return (
    <View style={styles.navbar(isTransparent)}>
      <Ionicons
        name="ios-search-outline"
        size={23}
        color="#333"
        style={styles.search}
      />
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Poppins-SemiBold',
          color: '#000',
          display: isTransparent ? 'none' : 'flex',
        }}>
        Polo G App
      </Text>
      <View style={styles.row}>
        <View style={{position: 'relative'}}>
          <SimpleLineIcons
            name="bell"
            size={20}
            color="#333"
            style={styles.bell}
          />
          <Text
            style={{
              backgroundColor: '#109fd9',
              color: '#fff',
              position: 'absolute',
              top: -2,
              paddingHorizontal: 4,
              lineHeight: 14,
              right: 17,
              fontSize: 12,
              borderRadius: 100,
            }}>
            3
          </Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={20}
          color="#333"
          style={styles.dots}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: isTransparent => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: isTransparent ? 'transparent' : '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
  }),
  row: {
    flexDirection: 'row',
  },
  bell: {
    marginRight: 20,
  },
});
