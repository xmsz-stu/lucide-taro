import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7.001 15.085A1.5 1.5 0 0 1 9 16.5"}],["circle",{"cx":"18.5","cy":"8.5","r":"3.5"}],["circle",{"cx":"7.5","cy":"16.5","r":"5.5"}],["circle",{"cx":"7.5","cy":"4.5","r":"2.5"}]];

const Bubbles = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Bubbles.displayName = 'Bubbles';

export default Bubbles;
