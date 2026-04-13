import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 17V7h10"}],["path",{"d":"M17 17 7 7"}]];

const ArrowUpLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
