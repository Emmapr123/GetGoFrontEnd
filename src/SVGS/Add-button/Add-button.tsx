import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AddButton(props: SvgProps) {
  return (
    <Svg
      width={89.991}
      height="40.44mm"
      viewBox="0 0 67.5 114.62"
      {...props}
    >
      <Path
        d="M33.75 114.62V0M.01 57.13l67.47.35"
        fill="none"
        stroke="#1d1d1b"
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}

export { AddButton }
