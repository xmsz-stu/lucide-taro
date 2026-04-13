import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["polygon",{"points":"12 2 19 21 12 17 5 21 12 2"}]];

const Navigation2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Navigation2.displayName = 'Navigation2';

export default Navigation2;
