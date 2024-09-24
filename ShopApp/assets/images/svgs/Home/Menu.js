import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';
const MenuImage = ({color = '#000000', ...props}: SvgProps) => (
  <Svg
    width={24}
    height={14}
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={24} height={2} fill={color} />
    <Rect y={12} width={24} height={2} fill={color} />
    <Rect y={6} width={13} height={2} fill={color} />
    <Rect x={18} y={6} width={6} height={2} fill={color} />
  </Svg>
);
export default MenuImage;
