import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen } from '../../screens/Workout-list';
import { Button, useMyContext } from '../../components';
import { AddWorkoutScreen, 
  IndividualWorkoutScreen, 
  StartWorkoutScreen } from '../../screens';
import { RootStackParamList } from '../../routes';

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  const myContext = useMyContext();
  const myModal = () => {
    myContext?.onModalChange()
  }

return (
  <Stack.Navigator screenOptions={{headerStyle: [{backgroundColor: '#26547c'}], headerBackTitle: '', headerLeft: () => undefined, headerTruncatedBackTitle: ''}}>
    <Stack.Screen 
      name="WorkoutList" 
      component={WorkoutListScreen} 
      options={{headerTitle: () => <Button text={'GetGo'} onPress={() => myModal() } />}}/>
    <Stack.Screen 
      name="AddWorkoutScreen" 
      component={AddWorkoutScreen}
      options={{headerTitle: ''}}/>
    <Stack.Screen 
      name="IndividualWorkoutScreen" 
      component={IndividualWorkoutScreen} 
      options={{headerTitle: () => <Button text={'GetGo'} onPress={() => myModal() }/>}}/>
    <Stack.Screen 
      name="StartWorkoutScreen" 
      component={StartWorkoutScreen} 
      options={{headerTitle: ''}}/>
  </Stack.Navigator>
)}

export { Main }