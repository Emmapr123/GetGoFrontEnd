import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
} from 'react-native';
import { MinutesAndSeconds } from '../Minutes-and-seconds/Minutes-and-seconds';
import { ExerciseComponentProps } from './Exercise-component.types'

const ExerciseComponent = ({
  title,
  duration,
  description,
}:ExerciseComponentProps) => {
  return (
  <View style={styles.exerciseBox} >
    <View style={styles.titleAndDuration}>
      <Text style={styles.title} >{title}</Text>
      <MinutesAndSeconds style={styles.duration} {...{duration}} />
    </View>
    <Text style={styles.description}> {description} </Text>
  </View>)
}

const styles = StyleSheet.create({
  exerciseBox: {
    borderColor: '#26547c',
    borderWidth: 0.3,
    borderRadius: 4,
    padding: 10,
    margin: 18
  },
  titleAndDuration: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    marginHorizontal: 3,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  duration: {
    fontSize: 14,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  description: {
    fontSize: 14,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Thin'
  }
})

export { ExerciseComponent } 