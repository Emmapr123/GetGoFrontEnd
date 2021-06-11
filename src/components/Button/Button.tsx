import React from 'react';
import { 
  Text, 
  TouchableOpacity
} from 'react-native';
import { ButtonProps } from './Button.types';

const Button = ({style, text, onPress}: ButtonProps) => {

  return(
    <TouchableOpacity {...{style, onPress}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }