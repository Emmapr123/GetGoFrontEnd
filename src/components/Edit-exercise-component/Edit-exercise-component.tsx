import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  Dimensions,
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
  return <View>
    <TextInput placeholder={'Add title'} value={title} onChangeText={(text) => onChange('title', text)}/>
    <TextInput value={`${duration}`} onChangeText={(text) => onChange('duration', text)}/>
    <TextInput value={description} onChangeText={(text) => onChange('description', text)} />
  </View>
}

export { EditExerciseComponent } 