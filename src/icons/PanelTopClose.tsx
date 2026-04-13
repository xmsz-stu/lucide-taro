import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 9h18"}],["path",{"d":"m9 16 3-3 3 3"}]];

const PanelTopClose = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelTopClose.displayName = 'PanelTopClose';

export default PanelTopClose;
