import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TimePickerComponentProps {
  minutes: number,
  setMinutes: Dispatch<SetStateAction<number>>,
  seconds: number,
  setSeconds: Dispatch<SetStateAction<number>>
}
