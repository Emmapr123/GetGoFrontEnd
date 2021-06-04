import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddButton = () => {

  return(
    <TouchableOpacity>
      <Text>Add</Text>
    </TouchableOpacity>
  )
}

export { AddButton }