import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M14 9h1"}],["path",{"d":"M19 9h2"}],["path",{"d":"M3 9h2"}],["path",{"d":"M9 9h1"}]];

const PanelTopDashed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelTopDashed.displayName = 'PanelTopDashed';

export default PanelTopDashed;
