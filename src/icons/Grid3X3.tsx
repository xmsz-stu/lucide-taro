import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 9h18"}],["path",{"d":"M3 15h18"}],["path",{"d":"M9 3v18"}],["path",{"d":"M15 3v18"}]];

const Grid3x3 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Grid3x3.displayName = 'Grid3x3';

export default Grid3x3;
