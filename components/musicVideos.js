import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import music1 from '../assets/poloGmusic-1.jpg';
import music2 from '../assets/poloGmusic-2.jpg';
import music3 from '../assets/poloGmusic-3.jpg';
import music21 from '../assets/poloGmusic2-1.jpg';
import music22 from '../assets/poloGmusic2-2.jpg';
import music23 from '../assets/poloGmusic2-3.jpg';
import music24 from '../assets/poloGmusic2-4.jpg';
import music25 from '../assets/poloGmusic2-5.jpg';

import Feather from 'react-native-vector-icons/Feather';
const MusicCard = ({img, name, desc, duration}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={img} />
      <Text style={styles.name}>{name}</Text>
      <Text style={{...styles.desc}}>{duration}</Text>
    </View>
  );
};
function MusicVideos() {
  const [moveValue, setmoveValue] = useState(0);
  const [active, setactive] = useState(0);
  const list1Offset = useSharedValue(0);
  const list2Offset = useSharedValue(-100);
  const list3Offset = useSharedValue(-100);
  const list1Opacity = useSharedValue(1);
  const list2Opacity = useSharedValue(0);
  const list3Opacity = useSharedValue(0);

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
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: list3Offset.value}],
      opacity: list3Opacity.value,
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Music Videos</Text>
      <ScrollView style={styles.tabs} horizontal={true}>
        <Pressable
          onPress={() => {
            list1Offset.value = withTiming(0, {
              duration: 500,
            });
            list1Opacity.value = withTiming(1, {
              duration: 500,
            });
            list2Opacity.value = withTiming(0, {
              duration: 500,
            });
            list2Offset.value = withTiming(-100, {
              duration: 500,
            });
            list3Opacity.value = withTiming(0, {
              duration: 500,
            });
            list3Offset.value = withTiming(-100, {
              duration: 500,
            });
            setactive(0);
          }}>
          <Text style={active === 0 ? styles.tabText : styles.inactive}>
            Most Views
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            list1Offset.value = withTiming(-100, {
              duration: 500,
            });
            list3Offset.value = withTiming(-100, {
              duration: 500,
            });
            list2Offset.value = withTiming(0, {
              duration: 500,
            });
            list1Opacity.value = withTiming(0, {
              duration: 500,
            });
            list3Opacity.value = withTiming(0, {
              duration: 500,
            });
            list2Opacity.value = withTiming(1, {
              duration: 500,
            });
            setactive(1);
          }}>
          <Text style={active === 1 ? styles.tabText : styles.inactive}>
            Last Uploaded
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            list1Offset.value = withTiming(-100, {
              duration: 500,
            });
            list2Offset.value = withTiming(-100, {
              duration: 500,
            });
            list3Offset.value = withTiming(0, {
              duration: 500,
            });
            list1Opacity.value = withTiming(0, {
              duration: 500,
            });
            list2Opacity.value = withTiming(0, {
              duration: 500,
            });
            list3Opacity.value = withTiming(1, {
              duration: 500,
            });
            setactive(2);
          }}>
          <Text style={active === 2 ? styles.tabText : styles.inactive}>
            Featured
          </Text>
        </Pressable>
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onLayout={event => width(event)}
        style={{
          flexDirection: 'row',
        }}>
        {active === 0 ? (
          <Animated.ScrollView
            style={[styles.list, animatedStyles1]}
            horizontal={true}>
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
              img={music23}
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
              img={music25}
              desc="Polo G ft.Future - No Time...."
              duration="3:00"
            />
          </Animated.ScrollView>
        ) : active === 1 ? (
          <Animated.ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[styles.list, animatedStyles2, styles.transform]}>
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
          </Animated.ScrollView>
        ) : (
          <Animated.ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[styles.list, animatedStyles3, styles.transform]}>
            <MusicCard
              name="DDG ft."
              img={music25}
              desc="DDG ft. Polo G & NLE Chopp.."
              duration="2:55"
            />
            <MusicCard
              name="Lil Tjay"
              img={music24}
              desc="Lil Tjay - Headshot (feat. Pol.."
              duration="0:25"
            />
            <MusicCard
              name="Polo G"
              img={music23}
              desc="Polo G - For My Fans (Fress)."
              duration="3:00"
            />
            <MusicCard
              name="DDG ft."
              img={music22}
              desc="DDG ft. Polo G & NLE Chopp.."
              duration="2:55"
            />

            <MusicCard
              name="Polo G"
              img={music21}
              desc="Polo G - My Ali (OA)"
              duration="3:20"
            />
          </Animated.ScrollView>
        )}
      </ScrollView>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...styles.name,
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
          }}>
          More Videos
        </Text>
        <Feather name="chevron-right" size={25} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    // marginVertical: 30,
    // backgroundColor: '#fffeff',
  },
  transform: {
    transform: [{translateX: -100}],
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
  },
  tabs: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabText: {
    color: '#252525',
    marginRight: 20,
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 5,
    borderBottomColor: '#109fd9',
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    // transform: [{translateX: '100%'}],
  },
  inactive: {
    color: '#959295',
    marginRight: 20,
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 5,
    fontFamily: 'Poppins-Medium',
  },
  list: {
    flexDirection: 'row',
    width: 'auto',
  },
  card: {
    width: 320,
    alignItems: 'flex-start',
    marginRight: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    // backgroundColor: 'red',
  },
  name: {
    color: '#252525',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  desc: {
    color: '#959295',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
export default MusicVideos;
