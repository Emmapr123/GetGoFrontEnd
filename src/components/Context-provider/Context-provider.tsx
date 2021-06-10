import React, {useState, createContext, useContext, FunctionComponent, Dispatch, SetStateAction} from 'react';
import { WorkoutListScreen } from '../../screens';

export interface MyContextValue {
  myState: string;
  setMyState: Dispatch<SetStateAction<string>>
  addWorkout: (workout: Workout) => void;
  onDeleteWorkout: (workout: Workout) => void;
  onEditWorkout: ( workout: Workout ) => void;
  myWorkouts: Workout[]
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

export const MyContext = createContext<MyContextValue | undefined>(undefined);

export const useMyContext = () => {
  const auth = useContext(MyContext);
  return auth;
};

export const MyContextProvider: FunctionComponent = ({children}) => {
  const [myState, setMyState] = useState('hello');

  const [myWorkouts, setMyWorkouts] = useState<Workout[]>([]);
  const addWorkout = (workout:Workout) => setMyWorkouts(prev => [...prev,workout])
  const onDeleteWorkout = (workout:Workout) => setMyWorkouts(prev => prev.filter(w => w.id != workout.id))
  const onEditWorkout = ( workout: Workout ) => setMyWorkouts(prev => prev.map((w) => {
    if (w.id === workout.id) {
      return workout
    } else 
      return w
  }))

  const value = {
    myWorkouts,
    addWorkout,
    onDeleteWorkout,
    onEditWorkout,
    myState,
    setMyState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};