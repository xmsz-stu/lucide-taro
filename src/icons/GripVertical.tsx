import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"9","cy":"12","r":"1"}],["circle",{"cx":"9","cy":"5","r":"1"}],["circle",{"cx":"9","cy":"19","r":"1"}],["circle",{"cx":"15","cy":"12","r":"1"}],["circle",{"cx":"15","cy":"5","r":"1"}],["circle",{"cx":"15","cy":"19","r":"1"}]];

const GripVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GripVertical.displayName = 'GripVertical';

export default GripVertical;
