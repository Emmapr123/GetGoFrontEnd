import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddButton = ({style}: {style: StyleProp<ViewStyle>}) => {

  return(
    <TouchableOpacity {...{style}}>
      <Text style={{fontSize: 24}}>Add</Text>
    </TouchableOpacity>
  )
}

export { AddButton }