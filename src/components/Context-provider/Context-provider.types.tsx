export interface MyContextValue {
  addWorkout: (workout: Workout) => void;
  onDeleteWorkout: (workout: Workout) => void;
  onEditWorkout: ( workout: Workout ) => void;
  myWorkouts: Workout[];
  myDoneWorkouts: DoneWorkout[];
  onWorkoutDone: (doneWorkout: DoneWorkout) => void;
  modalOn: boolean;
  onModalChange: () => void;
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
  date: string;
  workoutTitle: string
}

export interface modalOn {
  modalOn: boolean
}