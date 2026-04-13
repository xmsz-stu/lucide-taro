import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m8 14 4-4 4 4"}]];

const ChevronUpCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronUpCircle.displayName = 'ChevronUpCircle';

export default ChevronUpCircle;
