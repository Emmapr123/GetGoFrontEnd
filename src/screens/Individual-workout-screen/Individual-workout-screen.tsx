import { useNavigation, useRoute } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Workout, ExerciseComponent, Button, Exercise } from '../../components';

const IndividualWorkoutScreen = ( {workout}: {workout: Workout} ) => {
  
  const route = useRoute()
  const fullWorkout = route?.params?.workout
  const workoutTitle = fullWorkout?.title
  const exercises = fullWorkout?.exercises
  const navigation = useNavigation()

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Text style={styles.workoutTitle} >{workoutTitle}</Text>
      <Button text={'Edit'} style={styles.editButton} onPress={() => console.log('pressed')}/>
      <ScrollView>
      {exercises.map((exercise: Exercise,index: string) =>  {
          return <View key={index} >
            <ExerciseComponent  
              title={exercise.title} 
              duration={exercise.duration} 
              description={exercise.description} 
              onChange={() => console.log('changed')} />
          </View>
    })}
      </ScrollView>
      <Button text={'GO!'} style={styles.GoButton} onPress={() => navigation.navigate("StartWorkoutScreen")} />
    </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    fontSize: 24,
    alignSelf: 'center',
    margin: 18,
  },
  GoButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  },
  editButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  }
})

export { IndividualWorkoutScreen }