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
      <MinutesAndSeconds {...{duration}} />
    </View>
    <Text> {description} </Text>
  </View>)
}

const styles = StyleSheet.create({
  exerciseBox: {
    borderColor: 'black',
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
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  duration: {
    fontSize: 14,
    fontFamily: 'AppleSDGothicNeo-Regular'

  },
  description: {
    fontSize: 14,
    fontFamily: 'AppleSDGothicNeo-Thin'

  }
})

export { ExerciseComponent } 