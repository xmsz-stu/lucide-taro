import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["rect",{"x":"8","y":"8","rx":"1"}]];

const SquareSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareSquare.displayName = 'SquareSquare';

export default SquareSquare;
