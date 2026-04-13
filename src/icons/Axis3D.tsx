import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M13.5 10.5 15 9"}],["path",{"d":"M4 4v15a1 1 0 0 0 1 1h15"}],["path",{"d":"M4.293 19.707 6 18"}],["path",{"d":"m9 15 1.5-1.5"}]];

const Axis3d = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Axis3d.displayName = 'Axis3d';

export default Axis3d;
