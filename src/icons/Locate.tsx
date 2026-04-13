import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}],["circle",{"cx":"12","cy":"12","r":"7"}]];

const Locate = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Locate.displayName = 'Locate';

export default Locate;
