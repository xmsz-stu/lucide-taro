import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{"d":"M14 12a4 4 0 0 1 0 8H6"}],["line",{}]];

const Strikethrough = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Strikethrough.displayName = 'Strikethrough';

export default Strikethrough;
