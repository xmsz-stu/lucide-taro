import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"7"}],["circle",{"cx":"15","cy":"15","r":"7"}]];

const Blend = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Blend.displayName = 'Blend';

export default Blend;
