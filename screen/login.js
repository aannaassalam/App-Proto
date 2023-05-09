import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/input';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Polo G App</Text>
        <Pressable style={styles.close} onPress={() => navigation.goBack()}>
          <Ionicons name="close" color="#f2352a" size={25} />
        </Pressable>
      </View>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subheading}>Login To Your Account.</Text>
      <Input label="Email Address" placeholder="user@email.com" />
      <Input label="Password" forgot />
      {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.createAccount}>
        Don't have an account?{' '}
        <Text style={styles.boldText}>Sign Up For Free</Text>
      </Text>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Image
          source={require('../assets/instagram-black.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/youtube-black.png')}
          style={styles.image}
        />
        <Image source={require('../assets/vimeo.png')} style={styles.image} />
        <Image source={require('../assets/twitch.png')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  navbar: {
    // paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  navbarText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  close: {
    padding: 7,
    backgroundColor: '#f2f5fb',
    borderRadius: 100,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Poppins-ExtraBold',
    // marginBottom: 10,
    lineHeight: 38,
    color: '#000',
  },
  subheading: {
    fontSize: 18,
    color: '#555',
    fontFamily: 'Poppins-Medium',
    marginBottom: 25,
  },
  button: {
    width: 270,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e8bc0',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  createAccount: {
    // fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  boldText: {
    fontWeight: '600',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 30,
  },
});
