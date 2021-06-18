import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, ExerciseComponent, EditExerciseComponent, WorkoutTitleComponent, ExerciseHeaderComponent } from '../../components';
import { SaveButton } from '../../SVGS';
import { useAddWorkout } from './Add-workout-screen.hooks';

const AddWorkoutScreen = () => {

  const { onEditExercise, 
    deleteExercise, 
    addExercise, 
    saveChanges, 
    addWorkout, 
    title, 
    exercises, 
    currentIndex, 
    setTitle, 
    existingWorkout, 
    setCurrentIndex 
  } = useAddWorkout()

  return(
    <View style={{flex: 1}}>
      <WorkoutTitleComponent {...{title, setTitle}}/>
      <ExerciseHeaderComponent {...{addExercise, deleteExercise}} />
      <EditExerciseComponent {...exercises[currentIndex]} onChange={(key,value) => onEditExercise(currentIndex, key,value)}/>
      <ScrollView>
      {exercises.map((exercise,index) =>  {
        if (index!==currentIndex) {
          return <TouchableOpacity key={index} onPress={() => setCurrentIndex(index)}>
            <ExerciseComponent  {...exercise} onChange={(key,value) => onEditExercise(index, key, value)}/>
          </TouchableOpacity>
        } else return null
    })}
    </ScrollView>
    <Button style={styles.saveButton} text={<SaveButton height={30} color='#26547c'/>} onPress={existingWorkout ? saveChanges : addWorkout}/>
    </View>
  )
}

const styles = StyleSheet.create({

 saveButton: {
   position: 'relative',
   alignItems: 'flex-end',
   right: 20,
   bottom: 40
 }
})

export { AddWorkoutScreen }