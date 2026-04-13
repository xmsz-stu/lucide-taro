import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 15h18"}],["path",{"d":"m9 10 3-3 3 3"}]];

const PanelBottomOpen = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelBottomOpen.displayName = 'PanelBottomOpen';

export default PanelBottomOpen;
