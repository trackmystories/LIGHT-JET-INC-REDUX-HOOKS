import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ActionButton} from './';
import {ComponentProps} from '../types';

export default function CounterComponent(props: ComponentProps) {
  return (
    <View style={styles.buttonWrapper}>
      <View>
        <ActionButton onPress={props.minus} title={props.minusText} />
      </View>
      <View>
        <View>
          <Text style={styles.text}>
            {props.currentComponent}
            {props.currentNumberOfComponents}
          </Text>
        </View>
      </View>
      <View>
        <ActionButton onPress={props.add} title={props.addText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '80%',
    margin: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: '3%',
    textAlign: 'center',
  },
});
