import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { 
  SafeAreaView, 
  View,
  ScrollView,
  StyleSheet
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
      <View style={styles.buttonBox}>
        <Button style={styles.addButton} text={'add'} onPress={() => navigation.navigate('AddWorkoutScreen')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    position: 'absolute', 
    bottom: 32, 
    left: 0, right: 0, 
    zIndex: 3
  },
  addButton: {
    alignSelf: 'baseline', 
    marginLeft: 'auto', 
    marginRight: 32
  }
})

export { WorkoutListScreen } 