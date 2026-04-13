import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m12 8-4 4 4 4"}],["path",{"d":"M16 12H8"}]];

const CircleArrowLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowLeft.displayName = 'CircleArrowLeft';

export default CircleArrowLeft;
