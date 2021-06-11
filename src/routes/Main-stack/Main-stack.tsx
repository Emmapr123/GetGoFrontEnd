import { Workout } from "../../components";

export type RootStackParamList = {
  WorkoutList: { sort: 'latest' | 'top' } | undefined;
  AddWorkoutScreen: { workout: Workout };
  IndividualWorkoutScreen: { workout: Workout } ;
  StartWorkoutScreen: { workout: Workout };
  EndWorkoutScreen: {workoutTitle: string};
};