import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  Dimensions,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Exercise, useMyContext, WorkoutTitleComponent } from '../../components';


const blankExcercise: Exercise = {
  title: '',
  duration: 0,
  description: ''
}

interface ExerciseGuyProps extends Exercise {
  onChange: (key:string, value:string) => void
}

const EditExerciseGuy = ({
  title,
  duration,
  description,
  onChange
}:ExerciseGuyProps) => {
  return <View>
    <TextInput placeholder={'Add title'} value={title} onChangeText={(text) => onChange('title', text)}/>
    <TextInput value={`${duration}`} onChangeText={(text) => onChange('duration', text)}/>
  </View>
}

const ExerciseGuy = ({
  title,
  duration,
  description,
  onChange
}:ExerciseGuyProps) => {
  return <View>
    <Text >{title}</Text>
    <Text >{duration}</Text>
  </View>
}
const dummyState: Exercise[] = [
  {
    description: "",
    duration: 200,
    title: "Something",
  },
  {
    description: "",
    duration: 300,
    title: "A second one",
  },
]


const AddWorkoutScreen = () => {

  const [title,setTitle] = useState('')
  const [exercises,setExercises] = useState<Exercise[]>([])
  const [currentIndex,setCurrentIndex] = useState(0)
  const myContext=useMyContext()
  const addWorkout = () => {
    myContext?.addWorkout({
      id: `${new Date()}`,
      title,
      exercises
    })
  }

  const addExercise = () => setExercises(prev => [...prev, blankExcercise])
  const onEditExcercise = (index:number, key:string, value:string) => setExercises(prev => prev.map((exercise,i) => {
    if (i === index) {
       return {
         ...exercise,
         [key]: value
       }
    } return exercise
  }))

  console.log("_________exercises", exercises)
  return(
    <View>
      <TextInput 
       placeholder="Workout title"
       onChangeText={(text) => setTitle(text)}
       value={title}
      />
      <Button text={'Add Exercise'} onPress={addExercise}/>
      <Button text={'Add Workout'} onPress={addWorkout}/>
      <EditExerciseGuy {...exercises[currentIndex]} onChange={(key,value) => onEditExcercise(currentIndex, key,value)}/>
      {exercises.map((exercise,index) =>  {
        if (index!==currentIndex) {
          return <TouchableOpacity onPress={() => setCurrentIndex(index)}>
            <ExerciseGuy key={index} {...exercise} onChange={(key,value) => onEditExcercise(index, key, value)}/>
          </TouchableOpacity>
        } else return null
        
    })}
    </View>
  )
}

export { AddWorkoutScreen }