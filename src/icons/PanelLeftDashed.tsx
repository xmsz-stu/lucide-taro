import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M9 14v1"}],["path",{"d":"M9 19v2"}],["path",{"d":"M9 3v2"}],["path",{"d":"M9 9v1"}]];

const PanelLeftDashed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelLeftDashed.displayName = 'PanelLeftDashed';

export default PanelLeftDashed;
