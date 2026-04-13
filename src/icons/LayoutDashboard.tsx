import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["rect",{"x":"14","y":"3","rx":"1"}],["rect",{"x":"14","y":"12","rx":"1"}],["rect",{"x":"3","y":"16","rx":"1"}]];

const LayoutDashboard = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LayoutDashboard.displayName = 'LayoutDashboard';

export default LayoutDashboard;
