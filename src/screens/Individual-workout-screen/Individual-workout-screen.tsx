import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Workout, ExerciseComponent, Button, Exercise } from '../../components';
import { RootStackParamList } from '../../../App'
import { MinutesAndSeconds } from '../../components/Minutes-and-seconds/Minutes-and-seconds';

type IndividualWorkoutScreenProp = RouteProp<
  RootStackParamList,
  'IndividualWorkoutScreen'
>

const IndividualWorkoutScreen = ( {workout}: {workout: Workout} ) => {
  
  const route = useRoute<IndividualWorkoutScreenProp>();
  const fullWorkout = route?.params?.workout
  const workoutTitle = fullWorkout?.title
  const exercises = fullWorkout?.exercises
  const navigation = useNavigation()

  const totalDurationFunction = () => {
    const sum = exercises.map((exercise) => {
      return +exercise.duration
    })
    const addedUp = sum.reduce(function(a, b){
        return a + b;
      }, 0)
    return addedUp
  }

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Text style={styles.workoutTitle} >{workoutTitle}</Text>
      <MinutesAndSeconds style={styles.totalDuration} duration={totalDurationFunction()}/>
      <Button text={'Edit'} style={styles.editButton} onPress={() => navigation.navigate("AddWorkoutScreen", { workout: fullWorkout})}/>
      <ScrollView>
      {exercises.map((exercise,index) =>  {
          return <View key={index} >
            <ExerciseComponent  
              title={exercise.title} 
              duration={exercise.duration} 
              description={exercise.description} 
              onChange={() => console.log('changed')} />
          </View>
    })}
      </ScrollView>
      <Button text={'GO!'} style={styles.GoButton} onPress={() => navigation.navigate("StartWorkoutScreen", { workout: fullWorkout } )} />
    </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    fontSize: 24,
    alignSelf: 'center',
    margin: 18,
  },
  totalDuration:{
    fontSize: 18,
    alignSelf: 'center',
  },
  GoButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  },
  editButton: {
    position: 'absolute',
    top: 70,
    right: 20,
  }
})

export { IndividualWorkoutScreen }