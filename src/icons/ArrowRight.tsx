import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]];

const ArrowRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
