import React from 'react';
import { useMyContext } from '../Context-provider';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

const WorkoutTitleComponent = () => {

  // I get the workouts from my context provider component
  const myContext = useMyContext()  
  const workout = myContext?.myWorkouts
  const workoutTitle = workout?.map((workout) => {
    return workout.title
  })

  return(
    <View>
      {workoutTitle?.map((title) => {
        return <TouchableOpacity>
          <Text>{title}</Text>
        </TouchableOpacity>
      })}
    </View>
  )
}

export { WorkoutTitleComponent }