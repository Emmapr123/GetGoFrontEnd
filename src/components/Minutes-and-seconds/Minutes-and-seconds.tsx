import React from 'react';
import { Text } from 'react-native';

const MinutesAndSeconds = ( {duration}: {duration: number }) => {
  const min = Math.floor(duration / 60)
  const sec = duration - (min * 60) >= 0 ? duration - min * 60 : duration
  const minutesDisplay = min < 10 ? `0${min}` : min
  const secondsDisplay = sec < 10 ? `0${sec}` : sec
  return(
      <Text > {minutesDisplay} : {secondsDisplay} </Text>
  )
}

export { MinutesAndSeconds }