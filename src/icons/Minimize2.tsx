import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m14 10 7-7"}],["path",{"d":"M20 10h-6V4"}],["path",{"d":"m3 21 7-7"}],["path",{"d":"M4 14h6v6"}]];

const Minimize2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Minimize2.displayName = 'Minimize2';

export default Minimize2;
