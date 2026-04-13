import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"4","rx":"1"}],["rect",{"x":"11","y":"14","rx":"1"}]];

const Ungroup = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Ungroup.displayName = 'Ungroup';

export default Ungroup;
