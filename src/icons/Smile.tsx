import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{}],["line",{}]];

const Smile = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Smile.displayName = 'Smile';

export default Smile;
