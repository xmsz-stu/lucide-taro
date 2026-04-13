import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m16 10-4 4-4-4"}]];

const SquareChevronDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareChevronDown.displayName = 'SquareChevronDown';

export default SquareChevronDown;
