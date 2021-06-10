import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
  SafeAreaView, 
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Button, useMyContext, Workout } from '../../components';
import { MinutesAndSeconds } from '../../components/Minutes-and-seconds/Minutes-and-seconds';
import { BinButton } from '../../SVGS';

const WorkoutListScreen = () => {
  const navigation = useNavigation();
  const myContext = useMyContext()
  const workout = myContext?.myWorkouts

  // Navigates to the correct workout screen by passing it the id of the pressed title
  const findWorkout = (workout: Workout) => {
    navigation.navigate("IndividualWorkoutScreen", {workout: workout})
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, position: 'relative'}}>
        {workout?.map((workout) => {
          
          // Calculates the total duration per workout
          const totalDurationFunction = () => {
            const sum = workout.exercises.map((exercise) => {
              return +exercise.duration
            })
            const addedUp = sum.reduce(function(a, b){
                return a + b;
              }, 0)
            return addedUp
          }

        return <View style={styles.workoutContainer}>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}} key={workout.id} onPress={() => findWorkout(workout)} >
          <Text style={styles.title} >{workout.title}</Text>
          <MinutesAndSeconds style={styles.duration} duration={totalDurationFunction()} />
        </TouchableOpacity>
        <Button text={<BinButton height={20}/>} onPress={() => myContext?.onDeleteWorkout(workout)} style={{marginTop: 22, marginHorizontal: 15}} />
        {/* <TouchableOpacity onPress={() => myContext?.onDeleteWorkout(workout)} >
          <BinButton style={{flex: 2, marginTop: 22, marginHorizontal: 15}} height={20}/>
        </TouchableOpacity> */}
          </View>
      })}
      </ScrollView>
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
    marginLeft: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  duration: {
    fontSize: 18,
    marginTop: 24,
    marginLeft: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'
  }
})

export { WorkoutListScreen } 