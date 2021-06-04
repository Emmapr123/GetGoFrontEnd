import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  Dimensions
} from 'react-native';
import { AddButton } from '../../components';

const WorkoutListScreen = () => {
  const { width, height } = Dimensions.get('window')

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Text>Hello World</Text>
      <AddButton style={{position: 'absolute', right: 40, top: height - 150}}/>
    </View>
  )
}

export { WorkoutListScreen } 