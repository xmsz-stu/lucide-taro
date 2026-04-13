import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{"d":"m9 11 3 3L22 4"}]];

const CheckCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CheckCircle.displayName = 'CheckCircle';

export default CheckCircle;
