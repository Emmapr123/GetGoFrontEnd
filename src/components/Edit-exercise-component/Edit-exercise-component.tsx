import React from 'react';
import { 
  StyleSheet, 
  View,
  TextInput
} from 'react-native';
import { ExerciseComponentProps } from '../Exercise-component'

// Duration is now a text Input, will turn into a time picker later on
const EditExerciseComponent = ({
  title,
  duration,
  description,
  onChange
}:ExerciseComponentProps) => {
  return <View style={styles.editExerciseBox}>
    <View>
    <TextInput style={styles.title} placeholder={'Add title'} value={title} onChangeText={(text) => onChange('title', text)}/>
    <TextInput style={styles.description} placeholder={'Add description'} value={description} onChangeText={(text) => onChange('description', text)} />
    </View>
    <View style={styles.line}/>
    <TextInput style={styles.duration} value={`${duration}`} onChangeText={(text) => onChange('duration', text)}/>
  </View>
}

const styles = StyleSheet.create({
  editExerciseBox: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150
  },
  title: {
    fontSize: 18,
    marginBottom: 50
  },
  duration: {
    color: 'gray',
    fontSize: 18

  },
  description: {
    fontSize: 18
  },
  line: {
    borderRightColor: 'black',
    borderRightWidth: 0.2,
    marginVertical: 5
  }
})

export { EditExerciseComponent } 