import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Footer({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/polo-g-logo.png')}
        style={styles.image}
      />
      <Text style={styles.appName}>Polo G App</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={{...styles.button, marginRight: 10}}
          onPress={() => navigation.push('Login')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Create Account')}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.poweredText}>
        Powered By{' '}
        <Text
          style={{
            color: '#109fd9',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Augend Tech
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginVertical: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf8fb',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  poweredText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginTop: 30,
    color: '#ccc',
  },
});
