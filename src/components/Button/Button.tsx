import React from 'react';
import { 
  Text, 
  StyleProp,
  ViewStyle,
  TouchableOpacity
} from 'react-native';

const Button = ({style, text, onPress}: {style?: StyleProp<ViewStyle>, text: string, onPress: () => void}) => {

  return(
    <TouchableOpacity {...{style, onPress}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }