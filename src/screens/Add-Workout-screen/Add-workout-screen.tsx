// import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View,
  TextInput,
  Text,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Exercise, useMyContext, ExerciseComponent, blankExcercise, EditExerciseComponent } from '../../components';

const AddWorkoutScreen = () => {

  const [title,setTitle] = useState('')
  const [exercises,setExercises] = useState<Exercise[]>([])
  const [currentIndex,setCurrentIndex] = useState(0)
  const myContext=useMyContext()
  const { width, height } = Dimensions.get('window')

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
          {/* Will be turned into SVG's, or otherwise styled buttons later on */}
          <Button style={{marginRight: 15}} text={'%'} onPress={() => console.log('pressed')} />
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
    paddingLeft: 10
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