import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m8 8 8 8"}],["path",{"d":"M16 8v8H8"}]];

const SquareArrowDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowDownRight.displayName = 'SquareArrowDownRight';

export default SquareArrowDownRight;
