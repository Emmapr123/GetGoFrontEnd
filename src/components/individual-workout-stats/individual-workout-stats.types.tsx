import { StyleProp, ViewStyle } from "react-native";
import { Workout } from "../Context-provider";

export interface WorkoutStatsProps {
  style?: StyleProp<ViewStyle>;
  workout: Workout
}