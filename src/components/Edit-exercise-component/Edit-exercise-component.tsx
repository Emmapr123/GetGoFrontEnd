import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View,
  TextInput
} from 'react-native';
import { FindMinutes, FindSeconds } from '../../Helper-functions';
import { ExerciseComponentProps } from '../Exercise-component';
import { TimePickerComPonent } from '../Time-picker-component';

const EditExerciseComponent = ({
  title,
  duration,
  description,
  onChange
}:ExerciseComponentProps) => {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    onChange('duration', `${(minutes * 60 + seconds)}`)
  }, [minutes, seconds])

  useEffect(() => {
    setMinutes(FindMinutes(duration))
    setSeconds(FindSeconds(duration, minutes))
  }, [duration])

  return <View style={styles.editExerciseBox}>
    <View style={{flex: 3}}>
    <TextInput style={styles.title} placeholder={'Add title'} value={title} onChangeText={(text) => onChange('title', text)}/>
    <TextInput style={styles.description} placeholder={'Add description'} value={description} onChangeText={(text) => onChange('description', text)} />
    </View>
    <View style={styles.line}/>
    <TimePickerComPonent {...{minutes, setMinutes, seconds, setSeconds}} />
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
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  description: {
    fontSize: 18,
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  },
  line: {
    borderRightColor: '#26547c',
    borderRightWidth: 0.2,
    marginVertical: 5
  }
})

export { EditExerciseComponent } 