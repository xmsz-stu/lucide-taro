import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"5","r":"1"}],["circle",{"cx":"19","cy":"5","r":"1"}],["circle",{"cx":"5","cy":"5","r":"1"}],["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"19","cy":"12","r":"1"}],["circle",{"cx":"5","cy":"12","r":"1"}],["circle",{"cx":"12","cy":"19","r":"1"}],["circle",{"cx":"19","cy":"19","r":"1"}],["circle",{"cx":"5","cy":"19","r":"1"}]];

const Grip = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Grip.displayName = 'Grip';

export default Grip;
