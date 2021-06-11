import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function EditButton(props: SvgProps) {

  const { width=40, height=40, color="#1d1d1b" } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 116.53 115.78"
      {...props}
    >
      <Path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M0 112.92h27.98M41.34 86.91L93.5 3.52l19.59 13.09q-26.1 41.28-52.18 82.56L39.69 111.3q.81-12.19 1.65-24.39z"
      />
    </Svg>
  )
}

export { EditButton }