import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

const MinutesAndSeconds = ( {duration, style}: {duration: number, style?: StyleProp<ViewStyle>}) => {
  const min = Math.floor(duration / 60)
  const sec = duration - (min * 60) >= 0 ? duration - min * 60 : duration
  const minutesDisplay = min < 10 ? `0${min}` : min
  const secondsDisplay = sec < 10 ? `0${sec}` : sec
  return(
      <Text {...{style}}> {minutesDisplay} : {secondsDisplay} </Text>
  )
}

export { MinutesAndSeconds }