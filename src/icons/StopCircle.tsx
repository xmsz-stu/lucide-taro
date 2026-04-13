import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["rect",{"x":"9","y":"9","rx":"1"}]];

const StopCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

StopCircle.displayName = 'StopCircle';

export default StopCircle;
