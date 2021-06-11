import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Dimensions
 } from "react-native"
import { AnimatedBarComponent } from "../Animated-countdown-bar-component"
import { Exercise } from '../Context-provider'

const StartWorkoutComponent = ( {onAnimationComplete, currentIndex, index, item}:  {onAnimationComplete: () => void, currentIndex: number, index: number, item: Exercise}) => {
 
  const { width } = Dimensions.get('window')

  return (
    <View key={index} style={{width}}>
      <Text style={styles.title} >{item.title}</Text>
      <Text style={styles.description} > {item.description} </Text>
      <AnimatedBarComponent exercise={item} active={index === currentIndex} {...{onAnimationComplete}}/>
    </View>
  )}

  const styles = StyleSheet.create({
    title: {
      fontSize: 36,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 30,
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    description: {
      fontFamily: 'AppleSDGothicNeo-Regular',
      fontSize: 18,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 10,
    }
  })

export { StartWorkoutComponent }