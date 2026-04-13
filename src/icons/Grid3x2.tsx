import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M15 3v18"}],["path",{"d":"M3 12h18"}],["path",{"d":"M9 3v18"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const Grid3x2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Grid3x2.displayName = 'Grid3x2';

export default Grid3x2;
