import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
  SafeAreaView, 
  View,
  ScrollView
} from 'react-native';
import { Button, useMyContext, WorkoutListItem } from '../../components';

const WorkoutListScreen = () => {

  const myContext = useMyContext()
  const workouts = myContext?.myWorkouts
  const navigation = useNavigation()

  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, position: 'relative'}}>
        {workouts?.map((workout) => {
          return <WorkoutListItem key={workout.id} {...workout} />
      })}
      </ScrollView>
      <View style={{position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 3}}>
        <Button style={{alignSelf: 'baseline', marginLeft: 'auto', marginRight: 32}} text={'add'} onPress={() => navigation.navigate('AddWorkoutScreen')} />
      </View>
    </SafeAreaView>
  )
}

export { WorkoutListScreen } 