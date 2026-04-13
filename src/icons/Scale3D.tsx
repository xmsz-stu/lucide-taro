import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{"d":"M5.293 18.707 11 13"}],["circle",{"cx":"19","cy":"19","r":"2"}],["circle",{"cx":"5","cy":"5","r":"2"}]];

const Scale3d = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Scale3d.displayName = 'Scale3d';

export default Scale3d;
