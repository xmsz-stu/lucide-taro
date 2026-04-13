import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 7h10v10"}],["path",{"d":"M7 17 17 7"}]];

const ArrowUpRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpRight.displayName = 'ArrowUpRight';

export default ArrowUpRight;
