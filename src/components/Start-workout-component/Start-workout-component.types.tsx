import { Exercise } from "../Context-provider";

export interface StartWorkoutComponentProps {
  onAnimationComplete: () => void, 
  currentIndex: number, 
  index: number, 
  item: Exercise
}