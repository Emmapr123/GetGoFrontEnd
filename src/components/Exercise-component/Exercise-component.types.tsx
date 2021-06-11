import { Exercise } from '../../components';

export const blankExcercise: Exercise = {
  title: '',
  duration: 0,
  description: ''
}

export interface ExerciseComponentProps extends Exercise {
  onChange: (key:string, value:string) => void
}
