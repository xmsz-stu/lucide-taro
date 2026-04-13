import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m10 8 4 4-4 4"}]];

const ChevronRightSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronRightSquare.displayName = 'ChevronRightSquare';

export default ChevronRightSquare;
