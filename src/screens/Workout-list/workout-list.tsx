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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{position: 'absolute', bottom: 32, left: 0, right: 0}}>
        <AddButton style={{alignSelf: 'baseline', marginLeft: 'auto', marginRight: 32}}/>
      </View>
    </SafeAreaView>
  )
}

export { WorkoutListScreen } 