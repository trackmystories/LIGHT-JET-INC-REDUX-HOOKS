import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonProps} from '../types';

export default function SubmitButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 30,
    borderColor: 'gray',
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  text: {
    margin: '3%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
