import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{"d":"M17.39 11.73 22 2l-9.73 4.61"}],["line",{}]];

const NavigationOff = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

NavigationOff.displayName = 'NavigationOff';

export default NavigationOff;
