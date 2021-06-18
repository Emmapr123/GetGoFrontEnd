import { Exercise, Workout } from "../Context-provider";

export interface StartWorkoutComponentProps {
  onAnimationComplete: (workoutId: string) => void, 
  currentIndex: number, 
  index: number, 
  item: Exercise,
  workout: Workout
}