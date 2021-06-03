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
    <View style={styles.container}>
      <Text style={{fontSize: 36}}>GetGo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export { Header }