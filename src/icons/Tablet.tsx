import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"2","rx":"2","ry":"2"}],["line",{}]];

const Tablet = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tablet.displayName = 'Tablet';

export default Tablet;
