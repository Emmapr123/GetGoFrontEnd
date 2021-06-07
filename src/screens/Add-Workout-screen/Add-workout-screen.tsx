import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  View,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Exercise, useMyContext, ExerciseComponent, blankExcercise, EditExerciseComponent } from '../../components';

const AddWorkoutScreen = () => {

  const [title,setTitle] = useState('')
  const [exercises,setExercises] = useState<Exercise[]>([])
  const [currentIndex,setCurrentIndex] = useState(0)
  const myContext=useMyContext()

  // Saves a new workout to the context
  const addWorkout = () => {
    myContext?.addWorkout({
      id: `${new Date()}`,
      title,
      exercises
    })
  }

  // places the new empty exercise to the list of exercises
  const addExercise = () => {
    setExercises(prev => [...prev, blankExcercise])
    setCurrentIndex(prev => prev + 1)
  }

  // Takes the pressed on exercise from the list, to the top, ready to be editted
  const onEditExcercise = (index:number, key:string, value:string) => setExercises(prev => prev.map((exercise,i) => {
    if (i === index) {
       return {
         ...exercise,
         [key]: value
       }
    } return exercise
  }))

  return(
    <View>
      <TextInput 
       placeholder="Workout title"
       onChangeText={(text) => setTitle(text)}
       value={title}
      />
      {/* Will be turned into SVG's, or otherwise styled buttons later on */}
      <Button text={'Add Exercise'} onPress={addExercise}/>
      <Button text={'Add Workout'} onPress={addWorkout}/>
      <EditExerciseComponent {...exercises[currentIndex]} onChange={(key,value) => onEditExcercise(currentIndex, key,value)}/>
      {exercises.map((exercise,index) =>  {
        if (index!==currentIndex) {
          return <TouchableOpacity onPress={() => setCurrentIndex(index)}>
            <ExerciseComponent key={index} {...exercise} onChange={(key,value) => onEditExcercise(index, key, value)}/>
          </TouchableOpacity>
        } else return null
    })}
    </View>
  )
}

export { AddWorkoutScreen }