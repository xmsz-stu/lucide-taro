import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M7 10h10"}],["path",{"d":"M7 14h10"}]];

const CircleEqual = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleEqual.displayName = 'CircleEqual';

export default CircleEqual;
