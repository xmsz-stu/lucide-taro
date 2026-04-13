import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"9","r":"1"}],["circle",{"cx":"19","cy":"9","r":"1"}],["circle",{"cx":"5","cy":"9","r":"1"}],["circle",{"cx":"12","cy":"15","r":"1"}],["circle",{"cx":"19","cy":"15","r":"1"}],["circle",{"cx":"5","cy":"15","r":"1"}]];

const GripHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GripHorizontal.displayName = 'GripHorizontal';

export default GripHorizontal;
