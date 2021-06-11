import React, { useRef, useEffect } from 'react';
import { Vibration, 
  TextInput, 
  Dimensions, 
  View, 
  StyleSheet,
  Animated } from 'react-native';
import { Exercise } from '../Context-provider';

const AnimatedBarComponent = ( {exercise, active, onAnimationComplete}: {exercise: Exercise, active: boolean, onAnimationComplete: () => void}) => {

  const { width, height } = Dimensions.get('window')
  const timerAnimation = useRef(new Animated.Value(0)).current;
  const duration = +exercise.duration
  const newHeight = height - 160
  const inputRef = useRef<TextInput>(null);

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
    }).start(() => 
      onAnimationComplete()
    )
  }

  const moveDown = timerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, newHeight]
  })

  const opacity = timerAnimation.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 0.5, 1]
  })

  useEffect(() => {
    if (active) {
      AnimatedExerciseBar();
    }
  }, [active])

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
    <View style={styles.timer}>
      <TextInput
        ref={inputRef}
        style={styles.duration}
        defaultValue={duration.toString()}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  duration: {
    fontFamily: 'AppleSDGothicNeo-Regular',
    fontSize: 40, 
    width: 70, 
  },
  timer: {
    alignItems:'center',
    flex: 1,
    top: '75%'
  }
})

export { AnimatedBarComponent }