import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function BinButton(props: SvgProps) {

  // const { color, width, height} = props

  return (
    <Svg
      id="prefix__Laag_1"
      x={0}
      y={0}
      viewBox="0 0 595.28 841.89"
      {...props}
    >
      <Path
        d="M20.59 15.59h75.3M95.89 15.59l-8.94 100.29M20.59 14.87l8.93 101.01M29.52 115.88h57.43M45.69 6.75h25.1M45.69 5.96v10.1M70.25 5.96v10.1"
      />
    </Svg>
  )
}

export { BinButton }
