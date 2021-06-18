import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AddButton(props: SvgProps) {

  const { width=40, height=40, color="#000" } = props 

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 118.39 118.39"
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
        d="M.48 57.9l113.39.59M57.47 1.8q-.3 56.7-.59 113.39"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}

export { AddButton }
