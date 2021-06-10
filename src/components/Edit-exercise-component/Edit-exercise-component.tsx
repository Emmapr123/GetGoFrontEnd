import React, { useEffect, useState, useMemo } from 'react';
import {Picker} from '@react-native-picker/picker';
import { 
  StyleSheet, 
  View,
  TextInput
} from 'react-native';
import { ExerciseComponentProps } from '../Exercise-component'

const EditExerciseComponent = ({
  title,
  duration,
  description,
  onChange
}:ExerciseComponentProps) => {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const secondsArray = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55];
  const minutesArray = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60];

  useEffect(() => {
    onChange('duration', `${(minutes * 60 + seconds)}`)
  }, [minutes, seconds])

  useEffect(() => {
    const min = Math.floor(duration / 60)
    setMinutes(min)
    setSeconds(duration - (min * 60) >= 0 ? duration - min * 60 : duration)
  }, [duration])

  return <View style={styles.editExerciseBox}>
    <View style={{flex: 3}}>
    <TextInput style={styles.title} placeholder={'Add title'} value={title} onChangeText={(text) => onChange('title', text)}/>
    <TextInput style={styles.description} placeholder={'Add description'} value={description} onChangeText={(text) => onChange('description', text)} />
    </View>
    <View style={styles.line}/>
    <Picker
        style={{flex: 1, fontFamily: 'AppleSDGothicNeo-Regular'}}
        itemStyle={{height: 160}}
        selectedValue={minutes}
        onValueChange={(itemValue) =>
          setMinutes(itemValue)
        }>
            {minutesArray.map((minute) => {
             return <Picker.Item key={minute} label={`${minute}`} value={minute} />
            })}
      </Picker>
      <Picker
        style={{flex: 1, fontFamily: 'AppleSDGothicNeo-Regular'}}
        itemStyle={{height: 160}}
        selectedValue={seconds}
        onValueChange={(itemValue) => 
          setSeconds(itemValue)
        }>
          {secondsArray.map((seconds) => {
             return <Picker.Item key={seconds} label={`${seconds}`} value={seconds} />
            })}
      </Picker>
  </View>
}

const styles = StyleSheet.create({
  editExerciseBox: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 170
  },
  title: {
    fontSize: 18,
    marginBottom: 50,
    fontFamily: 'AppleSDGothicNeo-Regular'

  },
  duration: {
    color: 'gray',
    fontSize: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'


  },
  description: {
    fontSize: 18,
    fontFamily: 'AppleSDGothicNeo-Regular'

  },
  line: {
    borderRightColor: 'black',
    borderRightWidth: 0.2,
    marginVertical: 5
  }
})

export { EditExerciseComponent } 