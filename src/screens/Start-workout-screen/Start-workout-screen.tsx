import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { 
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Workout, AnimatedBarComponent } from '../../components';

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
    marginTop: 30,
    fontFamily: 'AppleSDGothicNeo-Regular',
  }
})

export { StartWorkoutScreen } 