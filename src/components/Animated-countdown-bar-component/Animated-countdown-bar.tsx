import React, { useRef, useEffect } from 'react';
import { Vibration, 
  TextInput, 
  Dimensions, 
  View, 
  Text,
  Animated } from 'react-native';
import { Exercise } from '../Context-provider';

const AnimatedBarComponent = ( {exercise, active}: {exercise: Exercise, active: boolean}) => {

  const { width, height } = Dimensions.get('window')
  const timerAnimation = useRef(new Animated.Value(0)).current;
  const duration = +exercise.duration
  const inputRef = useRef<TextInput>();

  React.useEffect(() => {
    const listener = timerAnimation.addListener(({value}) => {
      const number = (duration + (value * (1 - duration))).toFixed()
      inputRef?.current?.setNativeProps({
        text:  +number < 10 ? `0${number}` : `${number}`
      })
    })

    return () => {
      timerAnimation.removeListener(listener)
      timerAnimation.removeAllListeners();
    }
  })

  console.log(inputRef)

  // Now the animation knows where to start and how long it animates for
  const AnimatedExerciseBar = () => {
    Animated.timing(timerAnimation, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: true
    }).start()
  }

  const moveDown = timerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, height]
  })

  const opacity = timerAnimation.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 0.5, 1]
  })

  const textTransform = timerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  useEffect(() => {
    if (active) {
      AnimatedExerciseBar();
    }
  }, [active, duration])

  return(
    <View style={{flex: 1}}>
    <Animated.View 
      style={{
        position: 'absolute',
        width,
        height,
        opacity,
        backgroundColor: 'lightgreen',
        transform: [
          {
            translateY: moveDown
          }
        ]
      }}
    />
    <TextInput
      ref={`${inputRef}`}
      style={{fontSize: 40, width: 70, justifyContent: 'center', alignItems: 'center'}}
      defaultValue={duration.toString()}
    />
    </View>
  )
}

export { AnimatedBarComponent }