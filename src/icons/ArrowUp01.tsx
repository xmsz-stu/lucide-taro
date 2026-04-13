import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 8 4-4 4 4"}],["path",{"d":"M7 4v16"}],["rect",{"x":"15","y":"4","ry":"2"}],["path",{"d":"M17 20v-6h-2"}],["path",{"d":"M15 20h4"}]];

const ArrowUp01 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUp01.displayName = 'ArrowUp01';

export default ArrowUp01;
