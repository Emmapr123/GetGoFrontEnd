import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View
} from 'react-native';

const Header = () => {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 36}}>GetGo</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export { Header }