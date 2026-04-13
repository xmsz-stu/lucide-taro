import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M9.17 14.83a4 4 0 1 0 0-5.66"}]];

const Copyleft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Copyleft.displayName = 'Copyleft';

export default Copyleft;
