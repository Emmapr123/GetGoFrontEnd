import React, {useState, createContext, useContext, FunctionComponent, Dispatch, SetStateAction, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const SaveWorkouts = async(workouts?: Workout[]) => {
    await AsyncStorage.setItem('workouts', JSON.stringify(workouts))
  }

  const [myWorkouts, setMyWorkouts] = useState<Workout[]>([]);

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
    myState,
    setMyState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};