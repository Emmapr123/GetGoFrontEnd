import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { FindMinutes, FindSeconds } from '../../Helper-functions';

interface MinutesAndSecondsProp {
  duration: number,
  style?: StyleProp<ViewStyle>
}

const MinutesAndSeconds = ( {duration, style}: MinutesAndSecondsProp ) => {
  const min = FindMinutes(duration)
  const sec = FindSeconds(duration, min)
  const minutesDisplay = min < 10 ? `0${min}` : min
  const secondsDisplay = sec < 10 ? `0${sec}` : sec
  return(
      <Text {...{style}}> {minutesDisplay} : {secondsDisplay} </Text>
  )
}

export { MinutesAndSeconds }