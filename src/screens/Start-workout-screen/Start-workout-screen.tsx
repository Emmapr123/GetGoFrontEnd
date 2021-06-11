import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import { 
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Workout, StartWorkoutComponent } from '../../components';
import { StartWorkoutScreenProp } from './start-workout-screen.types';

const StartWorkoutScreen = ( {workout}: {workout: Workout}) => {

  const route = useRoute<StartWorkoutScreenProp>();
  const navigation = useNavigation()
  const exercises = route?.params?.workout.exercises
  const { width, height } = Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0)
  let flatListRef = useRef<FlatList>(null);

  const onAnimationComplete = () => {

    if (currentIndex < exercises.length - 1) {
    flatListRef.current?.scrollToIndex({animated: true, index: currentIndex + 1})
    } else {
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
          return <StartWorkoutComponent {...{onAnimationComplete, index, currentIndex, item}} />
        }}
      />
    </View>
  )
}

export { StartWorkoutScreen } 