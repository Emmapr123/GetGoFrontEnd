import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  View, 
} from 'react-native';
import { LogoHeader } from '../../SVGS';

const Header = () => {

  return(
    <SafeAreaView >
      <View style={styles.container}>
      <LogoHeader height={24} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48
  },
});

export { Header }