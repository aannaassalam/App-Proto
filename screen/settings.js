import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingStackNav from '../components/settingStackNav';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import kate from '../assets/payal.png';
import instagram from '../assets/instagram3d.png';
import snapchat from '../assets/snapchat.png';
import facebook from '../assets/facebook3d.png';
import youtube from '../assets/youtube3d.png';

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SettingStackNav heading="Settings" />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            marginBottom: 15,
          }}>
          <View
            style={{
              backgroundColor: '#f6b19e90',
              //   backgroundColor: 'rgb(255 153 125 / 20%);',

              borderRadius: 15,
              height: 200,
              width: '50%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Image source={kate} style={styles.image}></Image>
          </View>
          <View
            style={{
              flexDirection: 'column',
              paddingVertical: 5,
              width: '50%',
              paddingLeft: 40,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  ...styles.optionText,
                  fontSize: 23,
                  fontFamily: 'Poppins-Bold',
                }}>
                3.7
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Privy Score
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  ...styles.optionText,
                  fontSize: 23,
                  fontFamily: 'Poppins-Bold',
                }}>
                15
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Total Favourites
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  ...styles.optionText,
                  fontSize: 23,
                  fontFamily: 'Poppins-Bold',
                }}>
                6
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Reviews Flagged
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{color: '#000', fontSize: 25, fontFamily: 'Poppins-Bold'}}>
            Payal Dhare
          </Text>
          <Text
            style={{
              ...styles.optionSubText,
              marginTop: -8,
              color: '#f45536',
              fontFamily: 'Poppins-Bold',
            }}>
            Gaming
          </Text>
          <Text
            style={{
              ...styles.optionSubText,
              marginTop: 10,
            }}>
            Huda Kattan MUA & Blogger Turned Business War Instagram Love To
            Support Artists
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            width: '100%',
            justifyContent: 'space-between',
            marginVertical: 30,
            marginBottom: 50,
            // flexWrap: 'wrap',
          }}>
          <View style={styles.socialCard}>
            <Image source={youtube} style={styles.socialImage}></Image>
            <Text style={{color: '#333', fontWeight: '600'}}>Youtube</Text>
            <Text style={{color: '#111', fontWeight: '700'}}>100k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={snapchat} style={styles.socialImage}></Image>
            <Text style={{color: '#333', fontWeight: '600'}}>Snapchat</Text>
            <Text style={{color: '#111', fontWeight: '700'}}>90k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={instagram} style={styles.socialImage}></Image>
            <Text style={{color: '#333', fontWeight: '600'}}>Instagram</Text>
            <Text style={{color: '#111', fontWeight: '700'}}>10k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={facebook} style={styles.socialImage}></Image>
            <Text style={{color: '#333', fontWeight: '600'}}>Facebook</Text>
            <Text style={{color: '#111', fontWeight: '700'}}>80k</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 15,
            marginTop: 10,
            paddingBottom: 20,
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.settingOption}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.optionText}>Account Settings</Text>
              <Text style={styles.optionSubText}>
                Details regarding your account
              </Text>
            </View>
            <Feather name="chevron-right" size={30} color="#f45536" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.settingOption}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.optionText}>My Plans</Text>
              <Text style={styles.optionSubText}>
                See which plan best suits you
              </Text>
            </View>
            <Feather name="chevron-right" size={30} color="#f45536" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.settingOption,
              borderBottomColor: '#333',
              borderBottomWidth: 0.5,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.optionText}>Manage Reviews</Text>
              <Text style={styles.optionSubText}>
                See what people tell about you!
              </Text>
            </View>
            <Feather name="chevron-right" size={30} color="#f45536" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 230, 216, 0.1)',
  },
  settingOption: {
    paddingVertical: 10,
    borderTopColor: '#333',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '85%',
    height: '90%',
    resizeMode: 'contain',
  },
  optionText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  optionSubText: {
    fontSize: 12,
    marginTop: -5,
    fontFamily: 'Poppins-Medium',
  },
  socialCard: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '23%',
    padding: 5,
    backgroundColor: '#fefefe',
    borderRadius: 15,
    // shadowColor: '#333',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    elevation: 7,
  },
  socialImage: {width: '50%', resizeMode: 'contain', height: 50},
});
export default Settings;
