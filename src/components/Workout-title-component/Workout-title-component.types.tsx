import { Dispatch, SetStateAction } from "react";

export interface WorkoutTitleComponentProps {
  title: string,
  setTitle: Dispatch<SetStateAction<string>>
}