import React from 'react';
import { 
  Text, 
  TouchableOpacity
} from 'react-native';
import { ButtonProps } from './Button.types';

const Button = ({style, text, onPress}: ButtonProps) => {

  return(
    <TouchableOpacity {...{style, onPress}} hitSlop={{top: 8, left: 8, right: 8, bottom: 8}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }