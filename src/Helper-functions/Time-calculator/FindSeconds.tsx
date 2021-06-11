export const FindSeconds = (duration: number, min: number) => {
  return duration - (min * 60) >= 0 ? duration - min * 60 : duration
}