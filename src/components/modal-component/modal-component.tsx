import React, { ReactNode } from 'react'
import { Dimensions, 
  StyleProp, 
  Text,
  Modal,
  TouchableOpacity, 
  View, 
  ViewStyle } from "react-native"
import { useMyContext } from '../Context-provider'

interface ModalComponentProps {
  style?: StyleProp<ViewStyle>;
  text?: string | ReactNode, 
}

const ModalComponent = ({style, text}: ModalComponentProps) => {
  const myContext = useMyContext()
  const { height, width } = Dimensions.get('window')

  const setModal = () => {
    myContext?.onModalChange()
  }
  
  return(
    <Modal visible={myContext?.modalOn} animationType={'fade'} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'none'}}>
        <TouchableOpacity onPress={() => setModal()} style={{flex: 1, backgroundColor: '#06D6A0', opacity: .1}} />
        <Text {...{style}}>{text}</Text>
      </View>
    </Modal>
  )
}

export { ModalComponent }