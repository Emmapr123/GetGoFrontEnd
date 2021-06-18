import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyContextProvider } from './src/components';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Main } from './src/routes';

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