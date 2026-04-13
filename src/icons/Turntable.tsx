import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 12.01h.01"}],["path",{"d":"M18 8v4a8 8 0 0 1-1.07 4"}],["circle",{"cx":"10","cy":"12","r":"4"}],["rect",{"x":"2","y":"4","rx":"2"}]];

const Turntable = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Turntable.displayName = 'Turntable';

export default Turntable;
