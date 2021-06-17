import React from 'react';
import { 
  StyleSheet, 
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
    color: '#26547c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48
  },
});

export { Header }