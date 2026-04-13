import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["polygon",{"points":"3 11 22 2 13 21 11 13 3 11"}]];

const Navigation = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Navigation.displayName = 'Navigation';

export default Navigation;
