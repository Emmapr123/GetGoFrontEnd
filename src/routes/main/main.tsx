import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen } from '../../screens/Workout-list';
import { Button, MyContextProvider, useMyContext } from '../../components';
import { AddWorkoutScreen, 
  IndividualWorkoutScreen, 
  StartWorkoutScreen } from '../../screens';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RootStackParamList } from '../../routes';

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  const myContext = useMyContext();
  const myModal = () => {
    myContext?.onModalChange()
    console.log(myContext?.modalOn)
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
      options={{headerTitle: () => <Button text={'GetGo'} onPress={() => console.log('modal on')}/>}}/>
    <Stack.Screen 
      name="StartWorkoutScreen" 
      component={StartWorkoutScreen} 
      options={{headerTitle: ''}}/>
  </Stack.Navigator>
)}

export { Main }