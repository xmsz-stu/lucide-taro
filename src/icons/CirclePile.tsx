import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"19","r":"2"}],["circle",{"cx":"12","cy":"5","r":"2"}],["circle",{"cx":"16","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"19","r":"2"}],["circle",{"cx":"4","cy":"19","r":"2"}],["circle",{"cx":"8","cy":"12","r":"2"}]];

const CirclePile = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CirclePile.displayName = 'CirclePile';

export default CirclePile;
