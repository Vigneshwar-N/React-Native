import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const BlackHeartIcon = ({
  height = 21,
  width = 17,
  color = '#000000',
  ...props
}: SvgProps) => (
  <Svg
    width={height}
    height={width}
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.1477 0C13.147 0 11.4374 1.28244 10.4981 2.16658C9.55882 1.28244 7.85305 0 5.85327 0C2.40641 0 0 2.16057 0 5.25336C0 8.66117 2.98868 10.8638 5.88 12.9943C7.245 14.0012 8.65773 15.0416 9.74114 16.1953C9.92345 16.3884 10.1907 16.5 10.4714 16.5H10.5267C10.8083 16.5 11.0746 16.3876 11.256 16.1953C12.3413 15.0416 13.7531 14.0004 15.119 12.9943C18.0094 10.8647 21 8.66203 21 5.25336C21 2.16057 18.5936 0 15.1477 0Z"
      fill={color}
    />
  </Svg>
);
export default BlackHeartIcon;