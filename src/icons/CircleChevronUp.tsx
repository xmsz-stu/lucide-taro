import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m8 14 4-4 4 4"}]];

const CircleChevronUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleChevronUp.displayName = 'CircleChevronUp';

export default CircleChevronUp;
