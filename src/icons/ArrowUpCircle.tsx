import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m16 12-4-4-4 4"}],["path",{"d":"M12 16V8"}]];

const ArrowUpCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpCircle.displayName = 'ArrowUpCircle';

export default ArrowUpCircle;
