import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Button, Exercise, useMyContext, ExerciseComponent, blankExcercise, EditExerciseComponent, Workout } from '../../components';
import { BinButton, SaveButton, AddButton } from '../../SVGS';

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
  useEffect(() => {
      if (existingWorkout) {
        setTitle(existingWorkout.title);
        setExercises(existingWorkout.exercises);
      }
    }, [])

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
          <Button style={{marginRight: 15}} text={<BinButton height={20}/>} onPress={deleteExercise} />
          <Button text={<AddButton height={20} width={20}/>} onPress={addExercise}/>
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
    <Button style={styles.saveButton} text={<SaveButton height={30}/>} onPress={existingWorkout ? saveChanges : addWorkout}/>
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
    marginBottom: 10,
    alignItems: 'center'
  },
  ExercisesTitle: {
    fontSize: 24,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  ExercisesButtons: {
    marginRight: 18,
    flexDirection: 'row',
 },
 saveButton: {
   position: 'relative',
   alignItems: 'flex-end',
   right: 20,
   bottom: 40
 }
})

export { AddWorkoutScreen }