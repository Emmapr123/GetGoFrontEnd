import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  Dimensions,
} from 'react-native';
import { Button, useMyContext, WorkoutTitleComponent } from '../../components';

const WorkoutListScreen = () => {
  const { width, height } = Dimensions.get('window')
  const navigation = useNavigation();
  const myContext = useMyContext()



  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, position: 'relative'}}>
        <WorkoutTitleComponent/>
      </View>
      <View style={{position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 3}}>
        <Button style={{alignSelf: 'baseline', marginLeft: 'auto', marginRight: 32}} text={'add'} onPress={() => navigation.navigate('AddWorkoutScreen')} />
      </View>
    </SafeAreaView>
  )
}

export { WorkoutListScreen } 