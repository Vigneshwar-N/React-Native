import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const Cross = ({color = '#000000', ...props}: SvgProps) => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M27 14.0725L24.8573 12L19.5 17.1817L14.1428 12L12 14.0725L17.3573 19.2543L12 24.436L14.1428 26.5085L19.5 21.3268L24.8573 26.5085L27 24.436L21.6427 19.2543L27 14.0725Z"
      fill={color}
    />
  </Svg>
);
export default Cross;
