import React from 'react'
import { 
  StyleSheet, 
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { WorkoutTitleComponentProps } from './Workout-title-component.types';

const WorkoutTitleComponent = ( { title, setTitle }: WorkoutTitleComponentProps ) => {

  return(
    <View>
      <TextInput 
        placeholder="Workout title"
        style={styles.workoutTitle}
        onChangeText={(text) => setTitle(text)}
        value={title}
        />
      <View style={styles.line}/>    
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
  }
})

export { WorkoutTitleComponent }