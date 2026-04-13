import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"8"}],["line",{}],["line",{}],["line",{}],["line",{}]];

const Currency = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Currency.displayName = 'Currency';

export default Currency;
