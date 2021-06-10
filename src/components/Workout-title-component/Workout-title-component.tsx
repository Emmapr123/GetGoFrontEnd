import React from 'react';
import { useMyContext } from '../Context-provider';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const WorkoutTitleComponent = ({onPress}: {onPress: () => void}) => {

  // I get the workouts from my context provider component
  const myContext = useMyContext()  
  const navigation = useNavigation()
  const workout = myContext?.myWorkouts
  console.log(workout?.map((workout) => {
    workout.exercises.map((exercise) => {
      return exercise.duration
    })
  }))

  return(
    <ScrollView>
      {workout?.map((workout) => {
        return <TouchableOpacity key={workout.id} {...{onPress}}>
          <Text style={styles.title} >{workout.title}</Text>
        </TouchableOpacity>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 18,
    marginLeft: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'
  }
})

export { WorkoutTitleComponent }