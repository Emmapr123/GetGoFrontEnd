import React from 'react';
import { Vibration, 
  TextInput, 
  Dimensions, 
  View, 
  Text,
  Animated } from 'react-native';
import { Exercise, Workout } from '../Context-provider';

const AnimatedCountDownBar = ( {exercise, active} : { exercise: Exercise , active: Boolean}) => {
  
  return(
    <View>
      <Text>{exercise}</Text>
    </View>
  )
}

export { AnimatedCountDownBar }