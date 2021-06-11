import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AddButton(props: SvgProps) {

  const { width=40, height=40, color="#1d1d1b" } = props 

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 113.41 113.41"
      {...props}
    >
      <Path
        d="M.02 56.11l113.38.6M57.01.01l-.6 113.39"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}

export { AddButton }
