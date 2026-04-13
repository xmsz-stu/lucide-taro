import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"19","cy":"5","r":"2"}],["circle",{"cx":"5","cy":"19","r":"2"}],["path",{"d":"M5 17A12 12 0 0 1 17 5"}]];

const Spline = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Spline.displayName = 'Spline';

export default Spline;
