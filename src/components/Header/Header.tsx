import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
} from 'react-native';
import { LogoHeader } from '../../SVGS';

const Header = () => {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 36}}>
        {<LogoHeader />}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
});

export { Header }