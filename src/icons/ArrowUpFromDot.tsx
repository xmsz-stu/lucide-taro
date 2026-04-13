import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m5 9 7-7 7 7"}],["path",{"d":"M12 16V2"}],["circle",{"cx":"12","cy":"21","r":"1"}]];

const ArrowUpFromDot = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpFromDot.displayName = 'ArrowUpFromDot';

export default ArrowUpFromDot;
