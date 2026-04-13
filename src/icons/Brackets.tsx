import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}],["path",{"d":"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"}]];

const Brackets = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Brackets.displayName = 'Brackets';

export default Brackets;
