import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { 
  View,
  Text,
} from 'react-native';
import { Workout, useMyContext, Exercise, ExerciseComponent } from '../../components';

const IndividualWorkoutScreen = ( {workout}: {workout: Workout} ) => {
  
  const route = useRoute()
  const fullWorkout = route?.params?.workout
  const title = fullWorkout?.title
  console.log('-------title', title)
  const myContext = useMyContext()
  const exercises = fullWorkout?.exercises
  console.log('-------ex.', exercises)


  return(
    <View>
      <Text>{title}</Text>
      {exercises?.map((exercise : Exercise) => {
        return <View key={exercise.description}>
           <Text>{exercise.title}</Text>
           <Text>{exercise.description}</Text>
           <Text>{exercise.duration}</Text>
           </View>
      })}
    </View>
  )
}

export { IndividualWorkoutScreen }