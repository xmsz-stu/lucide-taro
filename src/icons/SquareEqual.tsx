import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 10h10"}],["path",{"d":"M7 14h10"}]];

const SquareEqual = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareEqual.displayName = 'SquareEqual';

export default SquareEqual;
