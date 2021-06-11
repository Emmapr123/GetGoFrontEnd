import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AddButton(props: SvgProps) {

  const { width=89, height=40, color="#1d1d1b" } = props

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 67.5 114.62"
      {...props}
    >
      <Path
        d="M33.75 114.62V0M.01 57.13l67.47.35"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}

export { AddButton }
