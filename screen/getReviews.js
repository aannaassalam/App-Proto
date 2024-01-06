import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import messenger from '../assets/messenger.png';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/gmail.png';
import link from '../assets/more.png';
import refer from '../assets/refer.png';
import SettingStackNav from '../components/settingStackNav';

function GetReviews() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://privy.reviews/john/?referral_code=1469',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.body}>
        <SettingStackNav heading="Get Reviews" />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            ...styles.body,
          }}>
          <Image style={styles.illustration} source={refer} />
          <Text style={{...styles.text, marginBottom: 10}}>
            Invite your community to review you
          </Text>
          <View style={styles.codeContainer}>
            <Text numberOfLines={1} style={styles.code}>
              https://privy.reviews/john/?referral_code=1469
            </Text>
            <View
              style={{
                ...styles.button,
              }}>
              <Pressable
                style={{...styles.button, width: '100%', marginRight: 0}}
                android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}>
                <Text style={{color: '#fff', fontSize: 18, margin: 'auto'}}>
                  Copy
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              width: '80%',
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <View style={styles.lineLeft}></View>
            <View style={styles.lineRight}></View>
            <Text
              style={{
                ...styles.text,
                padding: 10,
                width: 50,
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#aaa',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              OR
            </Text>
          </View>
          <Text style={{...styles.text, marginBottom: 10, marginTop: 0}}>
            Send an email invite to one or more users
          </Text>
          <View style={styles.codeContainer}>
            <TextInput
              numberOfLines={1}
              style={styles.code}
              placeholder="Enter Email"
              keyboardType="email-address"></TextInput>
            <View
              style={{
                ...styles.button,
              }}>
              <Pressable
                style={{...styles.button, width: '100%', marginRight: 0}}
                android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}>
                <Text style={{color: '#fff', fontSize: 18, margin: 'auto'}}>
                  Send
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              width: '80%',
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={{...styles.lineLeft, top: 38, width: '25%'}}></View>
            <View style={{...styles.lineRight, top: 38, width: '25%'}}></View>
            <Text
              style={{
                ...styles.text,
                marginVertical: 30,
                color: '#aaa',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              or share link via
            </Text>
          </View>
          <View
            style={{
              width: '85%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Pressable
              style={{
                ...styles.button,
                width: '100%',
                height: 55,
                marginRight: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onShare}
              android_ripple={{color: 'transparent', borderless: true}}>
              <Text style={{color: '#fff', fontSize: 18}}>
                Share with other apps
              </Text>
            </Pressable>
            {/* <TouchableOpacity style={styles.iconContainer}>
              <Image style={styles.icon} source={messenger} />
              <Text style={styles.iconText}>Messenger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                style={{
                  ...styles.icon,
                  width: 45,
                  height: 45,
                }}
                source={whatsapp}
              />
              <Text style={styles.iconText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image style={{...styles.icon}} source={email} />
              <Text style={styles.iconText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.iconContainer}}>
              <Image
                style={{
                  ...styles.icon,
                  width: 60,
                  resizeMode: 'contain',
                }}
                source={link}
              />
              <Text style={styles.iconText}>More</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f6b19e10',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  lineLeft: {
    width: '40%',
    height: 1,
    backgroundColor: '#ccc',
    position: 'absolute',
    top: 18,
    left: 0,
  },
  lineRight: {
    width: '40%',
    height: 1,
    backgroundColor: '#ccc',
    position: 'absolute',
    top: 18,
    right: 0,
  },
  button: {
    backgroundColor: '#f6b19e',
    width: '22%',
    height: '80%',
    marginRight: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    borderRadius: 10,
  },
  illustration: {
    width: '120%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 50,
  },
  heading: {
    color: '#1003A4',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
    color: '#555',
    width: '80%',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: 18,
  },
  orange: {
    color: '#ff7420',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 600,
    marginBottom: 15,
  },
  codeContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
    borderRadius: 10,
    height: 50,
    shadowColor: 'rgba(0,0,0,.3)',
    elevation: 10,
  },
  code: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingLeft: 15,
    overflow: 'hidden',
    width: '75%',
    textAlign: 'left',
  },

  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#333',
    fontWeight: '500',
  },
});
export default GetReviews;
