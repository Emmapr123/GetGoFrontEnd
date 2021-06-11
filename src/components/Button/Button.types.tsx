import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  style?: StyleProp<ViewStyle>, 
  text?: string | ReactNode, 
  onPress: () => void
}