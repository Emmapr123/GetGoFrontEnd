import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View
} from 'react-native';
import { useMyContext } from '../Context-provider';

const Header = () => {
  const myContext = useMyContext()

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 36}}>
        GetGo ({myContext?.myWorkouts.length})</Text>
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