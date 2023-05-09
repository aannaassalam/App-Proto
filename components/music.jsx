import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import music1 from '../assets/poloGmusic-1.jpg';
import music2 from '../assets/poloGmusic-2.jpg';
import music3 from '../assets/poloGmusic-3.jpg';
import music21 from '../assets/poloGmusic2-1.jpg';
import music22 from '../assets/poloGmusic2-2.jpg';
import music23 from '../assets/poloGmusic2-3.jpg';
import music24 from '../assets/poloGmusic2-4.jpg';
import Feather from 'react-native-vector-icons/Feather';

import music25 from '../assets/poloGmusic2-5.jpg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const MusicCard = ({img, name, desc, duration}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={img}></Image>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              ...styles.desc,
              width: '80%',
              overflow: 'hidden',
            }}>
            {desc}
          </Text>
          <Text style={{...styles.desc, marginLeft: 'auto'}}>{duration}</Text>
          <View style={styles.line}></View>
        </View>
      </View>
    </View>
  );
};
function Music() {
  const [moveValue, setmoveValue] = useState(0);
  const [active, setactive] = useState(0);
  const list1Offset = useSharedValue(0);
  const list2Offset = useSharedValue(-200);
  const list1Opacity = useSharedValue(1);
  const list2Opacity = useSharedValue(0);
  const width = event => {
    setmoveValue(event.nativeEvent.layout.width / 2);
  };
  console.log(moveValue);
  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: list1Offset.value}],
      opacity: list1Opacity.value,
    };
  });

  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: list2Offset.value}],
      opacity: list2Opacity.value,
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Music</Text>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => {
            list2Offset.value = withTiming(-200, {
              duration: 500,
            });
            list1Offset.value = withTiming(0, {
              duration: 500,
            });
            list2Opacity.value = withTiming(0, {
              duration: 400,
            });
            list1Opacity.value = withTiming(1, {
              duration: 400,
            });
            setactive(0);
          }}>
          <Text style={active === 0 ? styles.tabText : styles.inactive}>
            Most Listened
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            list1Offset.value = withTiming(-200, {
              duration: 500,
            });
            list2Offset.value = withTiming(-moveValue, {
              duration: 500,
            });
            list1Opacity.value = withTiming(0, {
              duration: 400,
            });
            list2Opacity.value = withTiming(1, {
              duration: 400,
            });
            setactive(1);
          }}>
          <Text style={active === 1 ? styles.tabText : styles.inactive}>
            Latest Release
          </Text>
        </Pressable>
      </View>
      <View
        onLayout={event => width(event)}
        style={{
          flexDirection: 'row',
        }}>
        <Animated.View style={[styles.list, animatedStyles1]}>
          <MusicCard
            name="Guitar Loop"
            img={music1}
            desc="Guitar Loop Kit/ Sample Pa..."
            duration="2:55"
          />
          <MusicCard
            name="[Free] NoCap"
            img={music2}
            desc="[Free] NoCap Type Beat-.."
            duration="2:55"
          />
          <MusicCard
            name="Polo G"
            img={music3}
            desc="Polo G ft.Future - No Time...."
            duration="0:25"
          />
          <MusicCard
            name="Polo G"
            img={music3}
            desc="Polo G ft.Future - No Time...."
            duration="3:00"
          />
          <MusicCard
            name="Polo G"
            img={music3}
            desc="Polo G ft.Future - No Time...."
            duration="3:00"
          />
        </Animated.View>
        <Animated.View style={[styles.list, animatedStyles2, styles.transform]}>
          <MusicCard
            name="Polo G"
            img={music21}
            desc="Polo G - My Ali (OA)"
            duration="3:20"
          />
          <MusicCard
            name="DDG ft."
            img={music22}
            desc="DDG ft. Polo G & NLE Chopp.."
            duration="2:55"
          />
          <MusicCard
            name="Polo G"
            img={music23}
            desc="Polo G - For My Fans (Fress)."
            duration="3:00"
          />
          <MusicCard
            name="Lil Tjay"
            img={music24}
            desc="Lil Tjay - Headshot (feat. Pol.."
            duration="0:25"
          />
          <MusicCard
            name="DDG ft."
            img={music25}
            desc="DDG ft. Polo G & NLE Chopp.."
            duration="2:55"
          />
        </Animated.View>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...styles.name,
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
          }}>
          More Music
        </Text>
        <Feather name="chevron-right" size={30} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    marginVertical: 80,
    // backgroundColor: '#fffeff',
  },
  transform: {
    transform: [{translateX: -200}],
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
  tabs: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabText: {
    color: '#252525',
    marginRight: 20,
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
    borderBottomColor: '#109fd9',
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    // transform: [{translateX: '100%'}],
  },
  inactive: {
    color: '#959295',
    marginRight: 20,
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  list: {
    alignItems: 'flex-start',
    width: '100%',
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 7,
    alignItems: 'center',
  },
  cardImage: {
    width: 110,
    height: 60,
    resizeMode: 'cover',
    // backgroundColor: 'red',
    marginRight: 20,
  },
  details: {
    position: 'relative',
    width: '67%',
  },
  line: {
    width: '100%',
    height: 1.5,
    position: 'absolute',
    bottom: -10,
    right: 0,
    backgroundColor: '#95929550',
  },
  name: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  desc: {
    color: '#959295',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default Music;
