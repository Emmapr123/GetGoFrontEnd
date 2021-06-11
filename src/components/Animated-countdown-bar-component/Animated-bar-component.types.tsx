import { Exercise } from "../Context-provider";

export interface AnimatedBarComponentProps {
  exercise: Exercise, 
  active: boolean, 
  onAnimationComplete: () => void
}
