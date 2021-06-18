import React, {useState, createContext, useContext, FunctionComponent, Dispatch, SetStateAction, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyContextValue, Workout, DoneWorkout } from './Context-provider.types';

export const MyContext = createContext<MyContextValue | undefined>(undefined);

export const useMyContext = () => {
  const auth = useContext(MyContext);
  return auth;
};

export const MyContextProvider: FunctionComponent = ({children}) => {
  const [myWorkouts, setMyWorkouts] = useState<Workout[]>([]);
  const [myDoneWorkouts, setMyDoneWorkouts] = useState<DoneWorkout[]>([]);

  const SaveWorkouts = async(workouts?: Workout[]) => {
    await AsyncStorage.setItem('workouts', JSON.stringify(workouts))
  }

  const addWorkout = (workout:Workout) => setMyWorkouts((prev) => {
    const update = [...prev,workout]
    SaveWorkouts(update)
    return update
  })

  const onDeleteWorkout = (workout:Workout) => setMyWorkouts((prev) => {
    const update = prev.filter(w => w.id != workout.id)
    SaveWorkouts(update)
    return update
  })

  const onEditWorkout = ( workout: Workout ) => setMyWorkouts((prev) => {
    const update = prev.map((w) => {
      if (w.id === workout.id) {
        return workout
      } else 
        return w
    })
    SaveWorkouts(update)
    return update
  })

  // const onWorkoutDone = (doneWorkout: DoneWorkout) => {
  //   setMyDoneWorkouts((prev) => )
  // }

  const loadWorkouts = async() => {
    const workouts = await AsyncStorage.getItem('workouts')
    if (workouts) {
      setMyWorkouts(JSON.parse(workouts))
    }
  }

  useEffect(() => {
    loadWorkouts()
  })

  const value = {
    myWorkouts,
    addWorkout,
    onDeleteWorkout,
    onEditWorkout,
    myDoneWorkouts
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};