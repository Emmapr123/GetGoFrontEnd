import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
  SafeAreaView, 
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { Button, useMyContext, Workout, WorkoutTitleComponent } from '../../components';
import { MinutesAndSeconds } from '../../components/Minutes-and-seconds/Minutes-and-seconds';

const WorkoutListScreen = () => {
  const { width, height } = Dimensions.get('window')
  const navigation = useNavigation();
  const myContext = useMyContext()
  const workout = myContext?.myWorkouts

  // Navigates to the correct workout screen by passing it the id of the pressed title
  const findWorkout = (workout: Workout) => {
    console.log('workout id-----', workout)
    navigation.navigate("IndividualWorkoutScreen", {workout: workout})
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        {workout?.map((workout) => {

          const totalDurationFunction = () => {
            const sum = workout.exercises.map((exercise) => {
              return +exercise.duration
            })
            const addedUp = sum.reduce(function(a, b){
                return a + b;
              }, 0)
            return addedUp
          }

        return <TouchableOpacity style={styles.workoutContainer} key={workout.id} onPress={() => findWorkout(workout)} >
          <Text style={styles.title} >{workout.title}</Text>
          <MinutesAndSeconds duration={totalDurationFunction()} />
        </TouchableOpacity>
      })}
      </View>
      <View style={{position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 3}}>
        <Button style={{alignSelf: 'baseline', marginLeft: 'auto', marginRight: 32}} text={'add'} onPress={() => navigation.navigate('AddWorkoutScreen')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    marginTop: 18,
    marginLeft: 18
  }
})

export { WorkoutListScreen } 