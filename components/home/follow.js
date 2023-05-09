import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Follow() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Follow Polo G Everywhere</Text>
      <View style={styles.row}>
        <Image
          source={require('../../assets/youtube.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>Youtube</Text>
          <Text style={styles.secondaryText}>5.57M Subscribers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#777"
          style={{marginLeft: 'auto'}}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../assets/facebook.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>Facebook</Text>
          <Text style={styles.secondaryText}>770K Followers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#777"
          style={{marginLeft: 'auto'}}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../assets/twitter.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>Twitter</Text>
          <Text style={styles.secondaryText}>3.4M Followers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#777"
          style={{marginLeft: 'auto'}}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../assets/tiktok.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>TikTok</Text>
          <Text style={styles.secondaryText}>4.4M Followers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#777"
          style={{marginLeft: 'auto'}}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={require('../../assets/instagram.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>Instagram</Text>
          <Text style={styles.secondaryText}>10.7M Followers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#777"
          style={{marginLeft: 'auto'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  header: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 15,
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
    marginBottom: -5,
  },
  secondaryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#555',
  },
});
