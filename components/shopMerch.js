import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import tshirt1 from '../assets/tshirt1.png';
import tshirt2 from '../assets/tshirt2.png';
import tshirt3 from '../assets/tshirt3.png';
import tshirt4 from '../assets/tshirt4.png';
import tshirt5 from '../assets/tshirt5.png';
import tshirt6 from '../assets/tshirt6.png';
import tshirt7 from '../assets/tshirt7.jpg';

function ShopMerch() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop Merch</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {[
          [tshirt1, tshirt2],
          [tshirt3, tshirt4],
          [tshirt5, tshirt6],
          [tshirt1, tshirt2],
        ].map((arr, id) => (
          <View key={id}>
            <TouchableOpacity activeOpacity={0.5} style={styles.card}>
              <Image style={styles.image} source={arr[0]} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.card}>
              <Image style={styles.image} source={arr[1]} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text style={styles.name}>Shop More</Text>
        <Feather name="chevron-right" size={25} color="#959295" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbf8fb',
    paddingVertical: 50,
    // marginBottom: 50,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  card: {
    margin: 8,
    backgroundColor: '#E8E6E9',
    padding: 25,
  },
  heading: {
    color: '#161415',
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 40,
  },
  image: {
    width: 75,
    height: 75,
  },
  name: {
    color: '#252525',
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
export default ShopMerch;
