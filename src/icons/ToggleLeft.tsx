import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"9","cy":"12","r":"3"}],["rect",{"x":"2","y":"5","rx":"7"}]];

const ToggleLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ToggleLeft.displayName = 'ToggleLeft';

export default ToggleLeft;
