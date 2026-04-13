import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["path",{"d":"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{"d":"M18 20c-1.7 0-3-1.3-3-3V4"}]];

const Pi = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Pi.displayName = 'Pi';

export default Pi;
