import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M8 16V8h8"}],["path",{"d":"M16 16 8 8"}]];

const ArrowUpLeftSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpLeftSquare.displayName = 'ArrowUpLeftSquare';

export default ArrowUpLeftSquare;
