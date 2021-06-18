import React from 'react';
import { 
  Text, 
  View } from "react-native"
import { WorkoutStatsProps } from './individual-workout-stats.types';

const IndividualWorkoutStats = ({style}: WorkoutStatsProps) => {

  return(
    <View {...{style}}>
      <Text>Hello World</Text>
    </View>
  )
}

export { IndividualWorkoutStats }