import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { 
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions
} from 'react-native';
import { RootStackParamList } from '../../../App';
import { Workout } from '../../components';

type StartWorkoutScreenProp = RouteProp<
  RootStackParamList,
  'StartWorkoutScreen'
>

const StartWorkoutScreen = ( {workout}: {workout: Workout}) => {

  const route = useRoute<StartWorkoutScreenProp>();
  const id = route?.params?.workout.id
  const workoutTitle = route?.params?.workout.title
  const exercises = route?.params?.workout.exercises
  const { width, height } = Dimensions.get('window')

  return(
    <View style={{flex: 1}}>
      <Text>{workoutTitle}</Text>
      <Animated.FlatList 
        data={exercises}
        keyExtractor={exercises => exercises.title}
        horizontal
        bounces={false}
        style={[StyleSheet.absoluteFillObject, {
          height,
          width,
        }]}
        snapToInterval={width}
        // ref={(ref) => { FlatListRef = ref; }}
        renderItem={({item, index}) => {
          return <View style={{width}}>
              <Text>{item.title}</Text>
              <Text>{item.duration}</Text>
            </View>
        }}
      />
    </View>
  )
}

export { StartWorkoutScreen } 