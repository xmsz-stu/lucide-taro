import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["rect",{"x":"3","y":"14","rx":"1"}],["rect",{"x":"14","y":"14","rx":"1"}]];

const LayoutPanelTop = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LayoutPanelTop.displayName = 'LayoutPanelTop';

export default LayoutPanelTop;
