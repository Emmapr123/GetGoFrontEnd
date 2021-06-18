import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { 
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
} from 'react-native';
import { StartWorkoutComponent, useMyContext } from '../../components';
import { StartWorkoutScreenProp } from '../../routes';

const StartWorkoutScreen = () => {

  const myContext = useMyContext()
  const route = useRoute<StartWorkoutScreenProp>();
  const navigation = useNavigation()
  const exercises = route?.params?.workout.exercises
  const workout = route?.params.workout
  const { width, height } = Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0)
  let flatListRef = useRef<FlatList>(null);

  const onWorkoutDone = (workoutId: string) => {
    myContext?.onWorkoutDone({
      date: `${new Date()}`,
      workoutId: workoutId
    })
  }

  const onAnimationComplete = (workoutId: string) => {

    if (currentIndex < exercises.length - 1) {
    flatListRef.current?.scrollToIndex({animated: true, index: currentIndex + 1})
    } else {
      Alert.alert('Well done!', `${workout.title} completed`)
      onWorkoutDone(workoutId)
      navigation.navigate("WorkoutList")
    }
  }

  return(
    <View style={{flex: 1}}>
      <FlatList 
        data={exercises}
        keyExtractor={exercises => exercises.title}
        horizontal
        bounces={false}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index)
        }}
        ref={flatListRef}
        style={[StyleSheet.absoluteFillObject, {
          height,
          width,
        }]}
        snapToInterval={width}
        renderItem={({item, index}) => {
          return <StartWorkoutComponent {...{onAnimationComplete, index, currentIndex, item, workout}} />
        }}
      />
    </View>
  )
}

export { StartWorkoutScreen } 