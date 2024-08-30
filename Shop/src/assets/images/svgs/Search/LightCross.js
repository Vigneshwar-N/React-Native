import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const LightCross = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.2}
      d="M13 1.85705L11.143 0L6.5 4.64295L1.85705 0L0 1.85705L4.64295 6.5L0 11.143L1.85705 13L6.5 8.35705L11.143 13L13 11.143L8.35705 6.5L13 1.85705Z"
      fill="black"
    />
  </Svg>
);
export default LightCross;
