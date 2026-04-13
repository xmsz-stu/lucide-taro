import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{}],["line",{}],["line",{}],["line",{}]];

const Crosshair = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Crosshair.displayName = 'Crosshair';

export default Crosshair;
