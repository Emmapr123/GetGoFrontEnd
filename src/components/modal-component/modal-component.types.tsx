import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ModalComponentProps {
  style?: StyleProp<ViewStyle>;
  text?: string | ReactNode, 
}