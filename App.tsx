import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen } from './src/screens/Workout-list';
import { Button, MyContextProvider } from './src/components';
import { AddWorkoutScreen, 
  IndividualWorkoutScreen, 
  StartWorkoutScreen } from './src/screens';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RootStackParamList } from './src/routes';

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Navigator screenOptions={{headerStyle: [{backgroundColor: '#26547c'}], headerBackTitle: '', headerLeft: () => undefined, headerTruncatedBackTitle: ''}}>
          <Stack.Screen 
            name="WorkoutList" 
            component={WorkoutListScreen} 
            options={{headerTitle: () => <Button text={'GetGo'} onPress={() => console.log('modal on')}/>}}/>
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