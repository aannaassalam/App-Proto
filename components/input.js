import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function Input({label, placeholder = '', forgot}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
      />
      {forgot && <Text style={styles.forgot}>Forgot Password?</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 20},
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
    color: '#333',
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  forgot: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#777',
    textAlign: 'right',
    marginTop: 7,
  },
});
