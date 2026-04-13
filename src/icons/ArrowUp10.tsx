import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 8 4-4 4 4"}],["path",{"d":"M7 4v16"}],["path",{"d":"M17 10V4h-2"}],["path",{"d":"M15 10h4"}],["rect",{"x":"15","y":"14","ry":"2"}]];

const ArrowUp10 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUp10.displayName = 'ArrowUp10';

export default ArrowUp10;
