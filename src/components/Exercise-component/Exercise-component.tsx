import React from 'react';
import { 
  Text, 
  View,
} from 'react-native';
import { Exercise } from '../../components';

// Adds a new, empty exercise at the bottom when add exercise is pressed - might want to change that 
const blankExcercise: Exercise = {
  title: '',
  duration: 0,
  description: ''
}

interface ExerciseComponentProps extends Exercise {
  onChange: (key:string, value:string) => void
}

const ExerciseComponent = ({
  title,
  duration,
  description,
  onChange
}:ExerciseComponentProps) => {
  return <View>
    <Text >{title}</Text>
    <Text >{duration}</Text>
    <Text> {description} </Text>
  </View>
}

export { ExerciseComponent } 
export { blankExcercise }
export { ExerciseComponentProps } 