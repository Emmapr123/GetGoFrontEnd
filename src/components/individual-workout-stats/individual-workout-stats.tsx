import React from 'react';
import { Dimensions, 
  StyleProp, 
  Text, 
  View, 
  ViewStyle} from "react-native"
import { Workout } from '../Context-provider';

interface WorkoutStatsProps {
  style?: StyleProp<ViewStyle>;
  workout: Workout
}

const IndividualWorkoutStats = ({style}: WorkoutStatsProps) => {

  const { height, width } = Dimensions.get('window')
  return(
    <View {...{style}}>
      <Text>Hello World</Text>
    </View>
  )
}

export { IndividualWorkoutStats }