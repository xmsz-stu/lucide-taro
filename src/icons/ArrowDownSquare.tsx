import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M12 8v8"}],["path",{"d":"m8 12 4 4 4-4"}]];

const ArrowDownSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownSquare.displayName = 'ArrowDownSquare';

export default ArrowDownSquare;
