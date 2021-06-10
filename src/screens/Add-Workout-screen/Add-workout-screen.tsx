import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Button, Exercise, useMyContext, ExerciseComponent, blankExcercise, EditExerciseComponent, Workout } from '../../components';
import { BinButton } from '../../SVGS';

type AddWorkoutScreenProp = RouteProp<
  RootStackParamList,
  'AddWorkoutScreen'
>

const AddWorkoutScreen = ( {workout}: {workout?: Workout}) => {

  const navigation = useNavigation();
  const [title,setTitle] = useState('')
  const [exercises,setExercises] = useState<Exercise[]>([blankExcercise])
  const [currentIndex,setCurrentIndex] = useState(0)
  const myContext=useMyContext()
  const { width, height } = Dimensions.get('window')
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

  // places the new empty exercise to the list of exercises
  const addExercise = () => {
    setExercises(prev => [...prev, blankExcercise])
    setCurrentIndex(prev => prev + 1)
  }

  const deleteExercise = () => {
    exercises.map((exercise, index) => {
      if (index === currentIndex) {
        exercises.splice(index, 1)
      }
    })
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

  // To edit an existing workout - does not work yet, will come back to this tonight
  useEffect((existingWorkout?: Workout) => {
      if (existingWorkout) {
        setTitle(existingWorkout.title);
        setExercises(existingWorkout.exercises);
      }
    })

  return(
    <View style={{flex: 1}}>
      <TextInput 
       placeholder="Workout title"
       style={styles.workoutTitle}
       onChangeText={(text) => setTitle(text)}
       value={title}
      />
      <View style={styles.line}/>
      <View style={styles.ExercisesButtonBox}>
        <Text style={styles.ExercisesTitle} > Exercises</Text>
        <View style={styles.ExercisesButtons}>
          <Button style={{marginRight: 15}} text={'%'} onPress={deleteExercise} />
          <Button text={'+'} onPress={addExercise}/>
        </View>
      </View>
      <EditExerciseComponent {...exercises[currentIndex]} onChange={(key,value) => onEditExcercise(currentIndex, key,value)}/>
      <ScrollView>
      {exercises.map((exercise,index) =>  {
        if (index!==currentIndex) {
          return <TouchableOpacity key={index} onPress={() => setCurrentIndex(index)}>
            <ExerciseComponent  {...exercise} onChange={(key,value) => onEditExcercise(index, key, value)}/>
          </TouchableOpacity>
        } else return null
    })}
    </ScrollView>
    <Button style={styles.saveButton} text={'#'} onPress={addWorkout}/>
    </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    height: 40,
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 0.3,
    margin: 18,
    paddingLeft: 10,
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 2,
    margin: 10
  },
  ExercisesButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  ExercisesTitle: {
    fontSize: 24,
    marginBottom: 15,
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  ExercisesButtons: {
    marginRight: 18,
    flexDirection: 'row',
 },
 saveButton: {
   position: 'relative',
   alignItems: 'flex-end',
   right: 30,
   bottom: 30
 }
})

export { AddWorkoutScreen }