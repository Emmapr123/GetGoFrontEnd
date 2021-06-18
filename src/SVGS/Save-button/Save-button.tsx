import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SaveButton(props: SvgProps) {

  const { width=41, height=165, color="#1d1d1b" } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 123.34 123.83"
      {...props}
    >
      <Path
        fill="none"
        stroke="none"
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M2.5 2.5h113.39v113.39H2.5z"
      />
      <Path
        d="M117.08 34.62c-8.87 4-27.94 14.12-39.56 36.24a80.43 80.43 0 00-7.97 23.41 100.18 100.18 0 00-39.54-38.75 85.69 85.69 0 0024.95-10.28c20.08-12.32 29.63-29.88 33.71-39a53.59 53.59 0 0028.37 28.37zm-63.84 37.1a43.09 43.09 0 00-9.29-7.13 207.36 207.36 0 01-16.9 27.54c-12.5 17.2-25 28.77-24.54 29.19s11.89-12.14 29-24.73a204 204 0 0127.78-17.18 43.58 43.58 0 00-6.05-7.69z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}

export { SaveButton }