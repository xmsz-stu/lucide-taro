import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 7 10 10"}],["path",{"d":"M17 7v10H7"}]];

const ArrowDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownRight.displayName = 'ArrowDownRight';

export default ArrowDownRight;
