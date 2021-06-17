import { useNavigation } from "@react-navigation/core"
import React, { useMemo } from "react"
import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet
 } from "react-native"
import { totalDuration } from "../../Helper-functions"
import { BinButton } from "../../SVGS"
import { Button } from "../Button"
import { useMyContext, Workout } from "../Context-provider"
import { MinutesAndSeconds } from "../Minutes-and-seconds"

const WorkoutListItem = (workout: Workout) => {

  const navigation = useNavigation()
  const myContext = useMyContext()
  const duration = useMemo(() => totalDuration(workout),[workout])

  const findWorkout = (workout: Workout) => {
    navigation.navigate("IndividualWorkoutScreen", {workout: workout})
  }

  return (
    <View key={workout.id} style={styles.workoutContainer}>
      <TouchableOpacity style={styles.touchableOpacity} key={workout.id} onPress={() => findWorkout(workout)} >
        <Text style={styles.title} >{workout.title}</Text>
        <MinutesAndSeconds style={styles.duration} duration={duration} />
      </TouchableOpacity>
      <Button text={<BinButton height={20} color='#ef476f'/>} onPress={() => myContext?.onDeleteWorkout(workout)} style={styles.BinButton} />
    </View>
  )}

const styles = StyleSheet.create({
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  touchableOpacity: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flex: 1
  },
  title: {
    fontSize: 24,
    marginTop: 18,
    marginLeft: 18,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  duration: {
    fontSize: 18,
    marginTop: 24,
    marginLeft: 18,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  BinButton: {
    marginTop: 25, 
    marginHorizontal: 15,
  }
})

export { WorkoutListItem} 