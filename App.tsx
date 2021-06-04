import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen } from './src/screens/Workout-list';
import { Header } from './src/components';
import { AddWorkoutScreen } from './src/screens';

type RootStackParamList = {
  WorkoutList: undefined;
  AddWorkoutScreen: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: Header}}>
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
        <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
