import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{}],["line",{}]];

const Frown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Frown.displayName = 'Frown';

export default Frown;
