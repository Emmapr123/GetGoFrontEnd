import React from 'react';
import {Picker} from '@react-native-picker/picker';
import { 
  View,
  StyleSheet
} from 'react-native';
import { TimePickerComponentProps } from './Time-picker-component.types';

const TimePickerComPonent = ( {
  minutes, 
  setMinutes, 
  seconds, 
  setSeconds,
}:TimePickerComponentProps) => {

  const secondsArray = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55];
  const minutesArray = [0,1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60];

  return(
    <View style={styles.pickerContainer}>
      <Picker
      style={styles.picker}
      itemStyle={{height: 160, color: '#26547c'}}
      selectedValue={minutes}
      onValueChange={(itemValue) =>
        setMinutes(itemValue)
      }>
      {minutesArray.map((minute) => {
          return <Picker.Item key={minute} label={`${minute}`} value={minute} />
          })}
      </Picker>
      <Picker
      style={styles.picker}
      itemStyle={{height: 160, color: '#26547c' }}
      selectedValue={seconds}
      onValueChange={(itemValue) => 
        setSeconds(itemValue)
      }>
      {secondsArray.map((seconds) => {
          return <Picker.Item key={seconds} label={`${seconds}`} value={seconds} />
          })}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    flex: 2
  },
  picker: {
    flex: 1, 
    color: '#26547c',
    fontFamily: 'AppleSDGothicNeo-Regular'
  }
})

export { TimePickerComPonent }

