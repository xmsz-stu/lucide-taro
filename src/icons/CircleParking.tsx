import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M9 17V7h4a3 3 0 0 1 0 6H9"}]];

const CircleParking = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleParking.displayName = 'CircleParking';

export default CircleParking;
