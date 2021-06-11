import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function BinButton(props: SvgProps) {

  const { width=28, height=40, stroke="#1d1d1b" } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 80.28 114.14"
      {...props}
    >
      <Path
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M2.49 11.34h75.3M77.79 11.34l-8.94 100.3M2.49 10.62l8.94 101.02M11.43 111.64h57.42M27.59 2.5h25.1M27.59 1.71v10.1M52.15 1.71v10.1"
      />
    </Svg>
  )
}

export { BinButton } 
