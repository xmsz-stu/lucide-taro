import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m8 14 4-4 4 4"}]];

const ChevronUpSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronUpSquare.displayName = 'ChevronUpSquare';

export default ChevronUpSquare;
