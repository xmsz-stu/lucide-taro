import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}],["circle",{"cx":"12","cy":"12","r":"7"}],["circle",{"cx":"12","cy":"12","r":"3"}]];

const LocateFixed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LocateFixed.displayName = 'LocateFixed';

export default LocateFixed;
