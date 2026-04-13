import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"4","rx":"2","ry":"2"}],["line",{}]];

const LaptopMinimal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LaptopMinimal.displayName = 'LaptopMinimal';

export default LaptopMinimal;
