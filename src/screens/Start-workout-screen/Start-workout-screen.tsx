import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react';
import { 
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Exercise, Workout } from '../../components';
import { MinutesAndSeconds } from '../../components/Minutes-and-seconds/Minutes-and-seconds';

const AnimatedBarComponent = ( {exercise, active}: {exercise: Exercise, active: boolean}) => {

  const { width, height } = Dimensions.get('window')
  const timerAnimation = useRef(new Animated.Value(0)).current;
  const duration = +exercise.duration
  const inputRef = useRef<TextInput>();
  // console.log(duration)
  // console.log(active)

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
      ref={() => inputRef}
      style={{fontSize: 40, width: 70, justifyContent: 'center', alignItems: 'center'}}
      defaultValue={duration.toString()}
    />
    {/* <Animated.Text>
      {duration}
    </Animated.Text> */}
    </View>
  )
}

type StartWorkoutScreenProp = RouteProp<
  RootStackParamList,
  'StartWorkoutScreen'
>

const StartWorkoutScreen = ( {workout}: {workout: Workout}) => {

  const route = useRoute<StartWorkoutScreenProp>();
  const workoutTitle = route?.params?.workout.title
  const exercises = route?.params?.workout.exercises
  const { width, height } = Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0)

  return(
    <View style={{flex: 1}}>
      {/* <Text>{workoutTitle}</Text> */}
      <Animated.FlatList 
        data={exercises}
        keyExtractor={exercises => exercises.title}
        horizontal
        bounces={false}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index)
          // setDuration(exercises[index].duration)
        }}
        style={[StyleSheet.absoluteFillObject, {
          height,
          width,
        }]}
        snapToInterval={width}
        renderItem={({item, index}) => {
          return <View key={index} style={{width}}>
              <Text style={styles.title} >{item.title}</Text>
              {/* <MinutesAndSeconds  duration={item.duration}/> */}
              <AnimatedBarComponent exercise={item} active={index === currentIndex}/>
            </View>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30
  }
})

export { StartWorkoutScreen } 