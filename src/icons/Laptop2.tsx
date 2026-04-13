import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"4","rx":"2","ry":"2"}],["line",{}]];

const Laptop2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Laptop2.displayName = 'Laptop2';

export default Laptop2;
