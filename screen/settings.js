import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingStackNav from '../components/settingStackNav';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import kate from '../assets/kate2.png';
import instagram from '../assets/instagram3d.png';
import snapchat from '../assets/snapchat3d.png';
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
            marginBottom: 5,
          }}>
          <View
            style={{
              backgroundColor: '#f6b19e',
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
                $5k
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Earnings
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  ...styles.optionText,
                  fontSize: 23,
                  fontFamily: 'Poppins-Bold',
                }}>
                100+
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Campaigns
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  ...styles.optionText,
                  fontSize: 23,
                  fontFamily: 'Poppins-Bold',
                }}>
                $500
              </Text>
              <Text style={{...styles.optionSubText, marginTop: -10}}>
                Current Balance
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
            Laura E.Jaggers
          </Text>
          <Text style={{...styles.optionSubText, marginTop: -13}}>
            Social Influencer
          </Text>
          <Text
            style={{
              color: '#000',
              marginTop: 2,
              fontFamily: 'Poppins-SemiBold',
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
            marginVertical: 20,
            // flexWrap: 'wrap',
          }}>
          <View style={styles.socialCard}>
            <Image source={youtube} style={styles.socialImage}></Image>
            <Text>Youtube</Text>
            <Text>100k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={snapchat} style={styles.socialImage}></Image>
            <Text>Snapchat</Text>
            <Text>90k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={instagram} style={styles.socialImage}></Image>
            <Text>Instagram</Text>
            <Text>10k</Text>
          </View>
          <View style={styles.socialCard}>
            <Image source={facebook} style={styles.socialImage}></Image>
            <Text>Facebook</Text>
            <Text>80k</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', paddingHorizontal: 15}}>
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
    backgroundColor: '#fafafa',
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
    width: '70%',
    height: '90%',
    resizeMode: 'cover',
  },
  optionText: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  optionSubText: {
    fontSize: 14,
    marginTop: -5,
    fontFamily: 'Poppins-Medium',
  },
  socialCard: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '23%',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 7,
  },
  socialImage: {width: '50%', resizeMode: 'contain', height: 50},
});
export default Settings;
