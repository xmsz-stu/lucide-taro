import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 15h18"}],["path",{"d":"m15 8-3 3-3-3"}]];

const PanelBottomClose = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelBottomClose.displayName = 'PanelBottomClose';

export default PanelBottomClose;
