import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { Button, ExerciseComponent, EditExerciseComponent, WorkoutTitleComponent } from '../../components';
import { BinButton, SaveButton, AddButton } from '../../SVGS';
import { useAddWorkout } from './Add-workout-screen.hooks';

const AddWorkoutScreen = () => {

  const { onEditExercise, deleteExercise, addExercise, saveChanges, addWorkout, title, exercises, currentIndex, setTitle, existingWorkout, setCurrentIndex } = useAddWorkout()

  return(
    <View style={{flex: 1}}>
      <WorkoutTitleComponent {...{title, setTitle}}/>
      <View style={styles.ExercisesButtonBox}>
        <Text style={styles.ExercisesTitle} > Exercises</Text>
        <View style={styles.ExercisesButtons}>
          <Button style={{marginRight: 15}} text={<BinButton height={20}/>} onPress={deleteExercise} />
          <Button text={<AddButton height={20} width={20}/>} onPress={addExercise}/>
        </View>
      </View>
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
    <Button style={styles.saveButton} text={<SaveButton height={30}/>} onPress={existingWorkout ? saveChanges : addWorkout}/>
    </View>
  )
}

const styles = StyleSheet.create({
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