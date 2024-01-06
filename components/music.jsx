import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';
import blog5 from '../assets/blog5.png';
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
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    image: '../assets/blog1.png',
    title: 'What are some ways you can improve your Personal',
    text: '',
  },
  {
    image: '../assets/blog2.png',
    title: '11 Benefits of user generated content',
    text: '',
  },
  {
    image: '../assets/blog3.png',
    title: 'How to become a micro influencer',
    text: '',
  },
  {
    image: '../assets/blog4.png',
    title: 'Reputation management for individuals',
    text: '',
  },
  {
    image: '../assets/blog5.png',
    title: 'How to get more likes on instagram',
    text: '',
  },
  {
    image: '../assets/blog1.png',
    title: 'What are some ways you can improve your Personal',
    text: '',
  },
];

const MusicCard = ({img, name, desc, duration}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate('blog', {
          img: img,
          heading: name,
        })
      }>
      <Image style={styles.cardImage} source={img} resizeMode="cover"></Image>
    </Pressable>
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
      <Text style={styles.heading}>Platform News</Text>
      {/* <View style={styles.tabs}>
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
      </View> */}
      <View
        onLayout={event => width(event)}
        style={{
          flexDirection: 'column',
        }}>
        {/* <Animated.View style={[styles.list, animatedStyles1]}> */}
        <View style={styles.row}>
          <View style={styles.cardOne}>
            <MusicCard
              img={blog1}
              name="What are some ways you can improve your Personal"
            />
          </View>
          <View style={styles.cardTwo}>
            <MusicCard
              img={blog2}
              name="11 Benefits of user generated content"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cardTwo}>
            <MusicCard img={blog3} name="How to become a micro influencer" />
          </View>
          <View style={styles.cardOne}>
            <MusicCard
              img={blog4}
              name="Reputation management for individuals"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cardOne}>
            <MusicCard img={blog5} name="How to get more likes on instagram" />
          </View>
          <View style={styles.cardTwo}>
            <MusicCard
              img={blog1}
              name="What are some ways you can improve your Personal"
            />
          </View>
        </View>
        {/* </Animated.View> */}
        {/* <Animated.View style={[styles.list, animatedStyles2, styles.transform]}>
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
        </Animated.View> */}
      </View>
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
          More News
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
    paddingVertical: 30,
    paddingBottom: 50,
    // marginVertical: 80,
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
    fontSize: 16,
    fontWeight: '600',
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
    fontWeight: '600',
    paddingBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  list: {
    alignItems: 'flex-start',
    // width: '100%',
  },
  card: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // backgroundColor: 'red',
    marginRight: 10,
  },
  details: {
    position: 'relative',
    // flex: 1,
    width: '63%',
  },
  line: {
    width: '100%',
    height: 1.5,
    position: 'absolute',
    bottom: -10,
    right: 0,
    backgroundColor: '#eee',
  },
  name: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  desc: {
    color: '#959295',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    height: 150,
    width: '100%',
    marginBottom: 10,
  },
  cardOne: {
    flex: 0.6,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 1,
  },
  cardTwo: {
    flex: 0.4,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 1,
  },
});
export default Music;
