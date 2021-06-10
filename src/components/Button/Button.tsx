import React, { ReactNode } from 'react';
import { 
  Text, 
  StyleProp,
  ViewStyle,
  TouchableOpacity
} from 'react-native';
import Svg, { SvgProps } from 'react-native-svg';

const Button = ({style, text, onPress}: {style?: StyleProp<ViewStyle>, text?: string | ReactNode, onPress: () => void}) => {

  return(
    <TouchableOpacity {...{style, onPress}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }