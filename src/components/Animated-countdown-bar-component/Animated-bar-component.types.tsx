import { Exercise, Workout } from "../Context-provider";

export interface AnimatedBarComponentProps {
  workout: Workout,
  exercise: Exercise, 
  active: boolean, 
  onAnimationComplete: (workoutId: string) => void,
}
