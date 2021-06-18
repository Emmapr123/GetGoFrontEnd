import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen } from './src/screens/Workout-list';
import { Button, MyContextProvider, useMyContext } from './src/components';
import { AddWorkoutScreen, 
  IndividualWorkoutScreen, 
  StartWorkoutScreen } from './src/screens';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Main, RootStackParamList } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roberto: require('./assets/fonts/Roberto.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {

    return(
    <MyContextProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </MyContextProvider>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});