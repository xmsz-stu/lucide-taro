import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m14 16-4-4 4-4"}]];

const ChevronLeftSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronLeftSquare.displayName = 'ChevronLeftSquare';

export default ChevronLeftSquare;
