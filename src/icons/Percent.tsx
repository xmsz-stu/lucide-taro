import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["circle",{"cx":"6.5","cy":"6.5","r":"2.5"}],["circle",{"cx":"17.5","cy":"17.5","r":"2.5"}]];

const Percent = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Percent.displayName = 'Percent';

export default Percent;
