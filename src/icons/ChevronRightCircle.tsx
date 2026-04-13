import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m10 8 4 4-4 4"}]];

const ChevronRightCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronRightCircle.displayName = 'ChevronRightCircle';

export default ChevronRightCircle;
