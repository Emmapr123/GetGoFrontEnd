import React, { Dispatch, SetStateAction } from 'react';

export interface TimePickerComponentProps {
  minutes: number,
  setMinutes: Dispatch<SetStateAction<number>>,
  seconds: number,
  setSeconds: Dispatch<SetStateAction<number>>
}
