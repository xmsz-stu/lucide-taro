import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]];

const ArrowLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;
