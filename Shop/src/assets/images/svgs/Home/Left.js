import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';
const LeftArrow = (props: SvgProps) => (
  <Svg
    width={52}
    height={51}
    viewBox="0 0 52 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} width={51} height={51} fill="black" />
    <Path
      d="M40.121 23.5605H18.242L26.1815 15.621L24.0605 13.5L12.5 25.0605L24.0605 36.621L26.1815 34.5L18.242 26.5605H40.121V23.5605Z"
      fill="white"
    />
  </Svg>
);
export default LeftArrow;
