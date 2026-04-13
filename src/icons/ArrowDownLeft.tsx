import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M17 7 7 17"}],["path",{"d":"M17 17H7V7"}]];

const ArrowDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;
