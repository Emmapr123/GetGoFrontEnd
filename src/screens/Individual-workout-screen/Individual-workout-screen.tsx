import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { 
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Workout, ExerciseComponent, Button, Exercise } from '../../components';

const IndividualWorkoutScreen = ( {workout}: {workout: Workout} ) => {
  
  const route = useRoute()
  const fullWorkout = route?.params?.workout
  const workoutTitle = fullWorkout?.title
  const exercises = fullWorkout?.exercises
  const [currentIndex,setCurrentIndex] = useState(0)
  const [title,setTitle] = useState('')

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Text>{workoutTitle}</Text>
      <ScrollView>
      {exercises.map((exercise: Exercise,index: string) =>  {
          return <View key={index} >
            <ExerciseComponent  title={exercise.title} duration={exercise.duration} description={exercise.description} onChange={() => console.log('changed')} />
          </View>
    })}
      </ScrollView>
      <Button text={'Start'} onPress={() => console.log('start')} />
      <Button text={'Edit'} onPress={() => console.log('pressed')}/>
    </View>
  )
}

export { IndividualWorkoutScreen }