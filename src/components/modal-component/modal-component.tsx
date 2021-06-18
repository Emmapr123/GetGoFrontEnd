import React from 'react'
import { 
  Text,
  Modal,
  TouchableOpacity, 
  View } from "react-native"
import { useMyContext } from '../Context-provider'
import { ModalComponentProps } from './modal-component.types'

const ModalComponent = ({style, text}: ModalComponentProps) => {

  const myContext = useMyContext()
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