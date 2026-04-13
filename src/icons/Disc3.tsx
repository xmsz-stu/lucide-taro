import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];

const Disc3 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Disc3.displayName = 'Disc3';

export default Disc3;
