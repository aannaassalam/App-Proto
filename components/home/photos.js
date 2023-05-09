import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Photo = ({image, navigation}) => {
  return (
    <View style={{width: 145, marginRight: 20}}>
      <TouchableOpacity
        style={styles.photo}
        onPress={() => navigation.navigate('photos')}>
        <LinearGradient
          colors={['#00000060', 'transparent', '#00000060']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            width: 145,
            height: 200,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
          }}></LinearGradient>
        <Image source={image} style={styles.image} />
        {/* <View
        colors={['#00000080', 'transparent']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        > */}
        <Entypo
          name="dots-three-vertical"
          color="#fff"
          size={16}
          style={styles.topIcon}
        />
        {/* </View> */}
        <View style={styles.bottomText}>
          <Ionicons name="ios-eye-sharp" color="#fff" size={18} />
          <Text style={styles.viewsText}>320K</Text>
        </View>
      </TouchableOpacity>
      <Text
        numberOfLines={2}
        style={{marginTop: 15, color: '#000', fontFamily: 'Poppins-Medium'}}>
        Performing his new song for the first time in history
      </Text>
    </View>
  );
};

export default function Photos({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photos</Text>
      <FlatList
        data={[
          require('../../assets/polo-g-photos-1.jpg'),
          require('../../assets/polo-g-photos-2.jpg'),
          require('../../assets/polo-g-photos-3.jpg'),
          require('../../assets/polo-g-photos-4.jpg'),
          require('../../assets/polo-g-photos-5.jpg'),
        ]}
        key={({item}) => item}
        renderItem={({item}) => <Photo image={item} navigation={navigation} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 15}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
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
    borderRadius: 10,
    overflow: 'hidden',
    // marginRight: 20,
  },
  image: {
    width: 145,
    height: 200,
    resizeMode: 'cover',
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
    position: 'absolute',
    bottom: 5,
    left: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 3,
  },
  viewsText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 1,
  },
});
