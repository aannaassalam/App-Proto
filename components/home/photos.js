import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Photo = ({item, navigation}) => {
  return (
    <View style={{width: 145, marginRight: 20}}>
      <TouchableOpacity
        style={styles.photo}
        // onPress={() => navigation.navigate('photos')}
        activeOpacity={1}>
        <Entypo
          name="dots-three-vertical"
          color="#fff"
          size={16}
          style={styles.topIcon}
        />
        <Image source={item.image} style={styles.image} />
        <View style={styles.bottomText}>
          <Text style={styles.viewsText}>{item.score}</Text>
          <Text style={styles.viewsText2}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Photos({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statistics</Text>

      <FlatList
        data={[
          {
            image: require('../../assets/chart.png'),
            score: 3.7,
            label: 'Privy Score',
          },
          {
            image: require('../../assets/heart.png'),
            score: 15,
            label: 'Total Favourites',
          },
          {
            image: require('../../assets/badge.png'),
            score: 5,
            label: 'Category Rank',
          },
          {
            image: require('../../assets/rank.png'),
            score: 19,
            label: 'Overall Rank',
          },
          {
            image: require('../../assets/flag.png'),
            score: 6,
            label: 'Reviews Flagged',
          },
        ]}
        key={({item}) => item}
        renderItem={({item}) => <Photo item={item} navigation={navigation} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        // style={{ padding: 15 }}
        contentContainerStyle={{padding: 15}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingTop: 20,
  },
  header: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 15,
  },
  photo: {
    height: 200,
    width: 145,
    position: 'relative',
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 25,
    paddingBottom: 15,
    elevation: 1,
    margin: 5,
    // marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  topIcon: {
    // width: '100%',
    position: 'absolute',
    top: 10,
    right: 5,
    zIndex: 3,
    // paddingHorizontal: 5,
    // paddingVertical: 10,
    // alignItems: 'flex-end',
  },
  bottomText: {
    marginTop: 'auto',
    justifyContent: 'flex-start',
    zIndex: 3,
    paddingHorizontal: 10,
  },
  viewsText: {
    textAlign: 'center',
    color: '#222',
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    lineHeight: 29,
    marginBottom: 5,
    // marginTop: 1,
  },
  viewsText2: {
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    // marginLeft: 5,
    // marginTop: 1,
  },
});
