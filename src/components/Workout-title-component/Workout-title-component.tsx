import React, { useState } from 'react';
import { useMyContext } from '../Context-provider';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  TextInput,
  View
} from 'react-native';

const WorkoutTitleComponent = () => {
  const myContext = useMyContext()

  const [workoutTitle, setWorkoutTitle] = useState('')
  

  console.log('_______ context value: ', myContext?.myState)

  return(
    <View>
      
      <TextInput 
       placeholder="Workout title"
       onChangeText={(text) => myContext?.setMyState(text)}
       value={myContext?.myState}
      />
    </View>
  )
}

export { WorkoutTitleComponent }