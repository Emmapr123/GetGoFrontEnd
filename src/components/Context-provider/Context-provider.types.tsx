export interface MyContextValue {
  addWorkout: (workout: Workout) => void;
  onDeleteWorkout: (workout: Workout) => void;
  onEditWorkout: ( workout: Workout ) => void;
  myWorkouts: Workout[];
  myDoneWorkouts: DoneWorkout[]
}

export interface Workout {
  id: string;
  title: string;
  exercises: Exercise[]
}

export interface Exercise {
  title: string;
  description: string;
  duration: number
}

export interface DoneWorkout {
  date: string
}