import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m12 8-4 4 4 4"}],["path",{"d":"M16 12H8"}]];

const SquareArrowLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowLeft.displayName = 'SquareArrowLeft';

export default SquareArrowLeft;
