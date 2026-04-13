import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{"cx":"19","cy":"19","r":"2"}],["path",{"d":"m13.41 13.41 4.18 4.18"}],["circle",{"cx":"12","cy":"12","r":"2"}]];

const Radius = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Radius.displayName = 'Radius';

export default Radius;
