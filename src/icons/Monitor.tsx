import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"3","rx":"2"}],["line",{}],["line",{}]];

const Monitor = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Monitor.displayName = 'Monitor';

export default Monitor;
