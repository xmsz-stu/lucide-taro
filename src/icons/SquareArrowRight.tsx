import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M8 12h8"}],["path",{"d":"m12 16 4-4-4-4"}]];

const SquareArrowRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowRight.displayName = 'SquareArrowRight';

export default SquareArrowRight;
