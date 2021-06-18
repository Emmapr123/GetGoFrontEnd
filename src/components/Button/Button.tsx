import React from 'react';
import { 
  Text, 
  TouchableOpacity
} from 'react-native';
import { ButtonProps } from './Button.types';

const Button = ({style, text, onPress}: ButtonProps) => {

  return(
    <TouchableOpacity {...{style, onPress}} hitSlop={{top: 24, left: 24, right: 24, bottom: 24}} >
      <Text style={{fontSize: 24, color: '#FFD166'}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }