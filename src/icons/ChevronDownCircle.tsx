import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m16 10-4 4-4-4"}]];

const ChevronDownCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronDownCircle.displayName = 'ChevronDownCircle';

export default ChevronDownCircle;
