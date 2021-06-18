import React from 'react';
import { 
  StyleSheet, 
  View,
  Text,
} from 'react-native';
import { BinButton , AddButton } from '../../SVGS';
import { Button } from '../Button';
import { ExerciseHeaderComponentProps } from './Exercise-header-component.types';

const ExerciseHeaderComponent = ( { addExercise, deleteExercise }: ExerciseHeaderComponentProps ) => {
  return(
    <View style={styles.ExercisesButtonBox}>
      <Text style={styles.ExercisesTitle} >Exercises</Text>
      <View style={styles.ExercisesButtons}>
        <Button style={{marginRight: 15, padding: 16}} text={<BinButton height={25} color='#ef476f'/>} onPress={deleteExercise} />
        <Button style={{ padding: 16}}text={<AddButton height={25} width={25} color='#26547c'/>} onPress={addExercise}/>
      </View>
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
    color: '#26547c',
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'AppleSDGothicNeo-Regular',
  },
  ExercisesButtons: {
    marginRight: 18,
    flexDirection: 'row',
 }
 })

 export { ExerciseHeaderComponent }