import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { createRef, useRef, useState } from 'react';
import { 
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Workout, AnimatedBarComponent, Exercise } from '../../components';

type StartWorkoutScreenProp = RouteProp<
  RootStackParamList,
  'StartWorkoutScreen'
>

const StartWorkoutScreen = ( {workout}: {workout: Workout}) => {

  const route = useRoute<StartWorkoutScreenProp>();
  const navigation = useNavigation()
  const workoutTitle = route?.params?.workout.title
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
      {/* <Text>{workoutTitle}</Text> */}
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
          return <View key={index} style={{width}}>
              <Text style={styles.title} >{item.title}</Text>
              <AnimatedBarComponent exercise={item} active={index === currentIndex} {...{onAnimationComplete}}/>
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
    marginTop: 30,
    fontFamily: 'AppleSDGothicNeo-Regular',
  }
})

export { StartWorkoutScreen } 