import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["rect",{"x":"14","y":"3","rx":"1"}],["rect",{"x":"14","y":"14","rx":"1"}],["rect",{"x":"3","y":"14","rx":"1"}]];

const LayoutGrid = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LayoutGrid.displayName = 'LayoutGrid';

export default LayoutGrid;
