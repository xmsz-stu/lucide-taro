import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M 22 14 L 22 10"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const Battery = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Battery.displayName = 'Battery';

export default Battery;
