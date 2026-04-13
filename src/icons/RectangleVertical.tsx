import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"6","y":"2","rx":"2"}]];

const RectangleVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RectangleVertical.displayName = 'RectangleVertical';

export default RectangleVertical;
