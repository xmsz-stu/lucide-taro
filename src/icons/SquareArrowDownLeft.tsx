import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m16 8-8 8"}],["path",{"d":"M16 16H8V8"}]];

const SquareArrowDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowDownLeft.displayName = 'SquareArrowDownLeft';

export default SquareArrowDownLeft;
