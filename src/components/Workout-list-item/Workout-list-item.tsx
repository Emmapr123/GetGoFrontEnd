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

  const findWorkout = (workout: Workout) => {
    navigation.navigate("IndividualWorkoutScreen", {workout: workout})
  }
  const duration = useMemo(() => totalDuration(workout),[workout])

return (<View key={workout.id} style={styles.workoutContainer}>
<TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}} key={workout.id} onPress={() => findWorkout(workout)} >
  <Text style={styles.title} >{workout.title}</Text>
  <MinutesAndSeconds style={styles.duration} duration={duration} />
</TouchableOpacity>
<Button text={<BinButton height={20}/>} onPress={() => myContext?.onDeleteWorkout(workout)} style={{marginTop: 22, marginHorizontal: 15}} />
  </View>
)}

const styles = StyleSheet.create({
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    marginTop: 18,
    marginLeft: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  duration: {
    fontSize: 18,
    marginTop: 24,
    marginLeft: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'
  }
})

export { WorkoutListItem} 