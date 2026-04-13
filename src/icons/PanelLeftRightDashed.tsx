import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M15 10V9"}],["path",{"d":"M15 15v-1"}],["path",{"d":"M15 21v-2"}],["path",{"d":"M15 5V3"}],["path",{"d":"M9 10V9"}],["path",{"d":"M9 15v-1"}],["path",{"d":"M9 21v-2"}],["path",{"d":"M9 5V3"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const PanelLeftRightDashed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelLeftRightDashed.displayName = 'PanelLeftRightDashed';

export default PanelLeftRightDashed;
