import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M8 8h8v8"}],["path",{"d":"m8 16 8-8"}]];

const SquareArrowUpRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowUpRight.displayName = 'SquareArrowUpRight';

export default SquareArrowUpRight;
