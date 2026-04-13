import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"6","r":"1"}],["line",{}],["circle",{"cx":"12","cy":"18","r":"1"}]];

const Divide = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Divide.displayName = 'Divide';

export default Divide;
