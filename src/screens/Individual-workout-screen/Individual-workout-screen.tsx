import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ExerciseComponent, Button, MinutesAndSeconds } from '../../components';
import { totalDuration } from '../../Helper-functions';
import { EditButton } from '../../SVGS';
import { IndividualWorkoutScreenProp } from './individual-workout-screen.types';

const IndividualWorkoutScreen = () => {
  
  const route = useRoute<IndividualWorkoutScreenProp>();
  const fullWorkout = route?.params?.workout
  const workoutTitle = fullWorkout?.title
  const exercises = fullWorkout?.exercises
  const navigation = useNavigation()

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Text style={styles.workoutTitle} >{workoutTitle}</Text>
      <MinutesAndSeconds style={styles.totalDuration} duration={totalDuration(fullWorkout)}/>
      <Button text={<EditButton height={20}/>} style={styles.editButton} onPress={() => navigation.navigate("AddWorkoutScreen", { workout: fullWorkout})}/>
      <ScrollView>
      {exercises.map((exercise,index) =>  {
          return <ExerciseComponent key={index}
              title={exercise.title} 
              duration={exercise.duration} 
              description={exercise.description} 
              onChange={() => console.log('changed')} />
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
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  totalDuration:{
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  GoButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    fontSize: 36,
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  editButton: {
    position: 'absolute',
    top: 70,
    right: 20,
    fontFamily: 'AppleSDGothicNeo-Regular',
  }
})

export { IndividualWorkoutScreen }