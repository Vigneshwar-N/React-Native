import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';
const RightArrow = ({
  color1 = '#000000',
  color2 = '#ffffff',
  ...props
}: SvgProps) => (
  <Svg
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      width={51}
      height={51}
      transform="matrix(-1 0 0 1 51 0)"
      fill={color1}
    />
    <Path
      d="M11.379 23.5605H33.258L25.3185 15.621L27.4395 13.5L39 25.0605L27.4395 36.621L25.3185 34.5L33.258 26.5605H11.379V23.5605Z"
      fill={color2}
    />
  </Svg>
);
export default RightArrow;
