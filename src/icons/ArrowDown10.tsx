import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 16 4 4 4-4"}],["path",{"d":"M7 20V4"}],["path",{"d":"M17 10V4h-2"}],["path",{"d":"M15 10h4"}],["rect",{"x":"15","y":"14","ry":"2"}]];

const ArrowDown10 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDown10.displayName = 'ArrowDown10';

export default ArrowDown10;
