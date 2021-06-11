import { useNavigation, useRoute } from '@react-navigation/core';
import {useEffect, useState} from 'react';
import { Exercise, useMyContext } from '../../components';
import { blankExcercise } from '../../components/Exercise-component/Exercise-component.types';
import { AddWorkoutScreenProp } from '../../routes';

const useAddWorkout = () => {
  const navigation = useNavigation();
  const [title,setTitle] = useState('')
  const [exercises,setExercises] = useState<Exercise[]>([blankExcercise])
  const [currentIndex,setCurrentIndex] = useState(0)
  const myContext=useMyContext()
  const route = useRoute<AddWorkoutScreenProp>();
  const existingWorkout = route?.params?.workout

  // Saves a new workout to the context
  const addWorkout = () => {
    myContext?.addWorkout({
      id: `${new Date()}`,
      title,
      exercises
    })
    navigation.navigate('WorkoutList')
  }

  // Saves an edited workout to the context
  const saveChanges = () => {
    myContext?.onEditWorkout({
      id: existingWorkout.id,
      title,
      exercises
    })
    navigation.navigate('WorkoutList')
  }

  // places the new empty exercise to the list of exercises
  const addExercise = () => {
    setExercises(prev => [...prev, blankExcercise])
    setCurrentIndex(prev => prev + 1)
  }

  // deletes exercises
  const deleteExercise = () => {
    exercises.map((exercise, index) => {
      if (index === currentIndex) {
        exercises.splice(index, 1)
      }
    })
  }

  // Takes the pressed on exercise from the list, to the top, ready to be editted
  const onEditExercise = (index:number, key:string, value:string) => setExercises(prev => prev.map((exercise,i) => {
    if (i === index) {
       return {
         ...exercise,
         [key]: value
       }
    } return exercise
  }))

  // To edit an existing workout - does not work yet, will come back to this tonight
  useEffect(() => {
      if (existingWorkout) {
        setTitle(existingWorkout.title);
        setExercises(existingWorkout.exercises);
      }
    }, [])

    return { onEditExercise, deleteExercise, addExercise, saveChanges, addWorkout, title, exercises, currentIndex, setTitle, existingWorkout, setCurrentIndex }
}

export { useAddWorkout }