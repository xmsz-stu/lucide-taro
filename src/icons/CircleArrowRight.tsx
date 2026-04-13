import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m12 16 4-4-4-4"}],["path",{"d":"M8 12h8"}]];

const CircleArrowRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleArrowRight.displayName = 'CircleArrowRight';

export default CircleArrowRight;
