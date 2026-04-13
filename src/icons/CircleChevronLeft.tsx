import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m14 16-4-4 4-4"}]];

const CircleChevronLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleChevronLeft.displayName = 'CircleChevronLeft';

export default CircleChevronLeft;
