import { Workout } from "../../components";

export const totalDuration = (workout: Workout) => {
  const sum = workout.exercises.map((exercise) => {
    return +exercise.duration
  })
  const addedUp = sum.reduce(function(a, b){
      return a + b;
    }, 0)
  return addedUp
}