import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 9h18"}],["path",{"d":"m15 14-3 3-3-3"}]];

const PanelTopOpen = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelTopOpen.displayName = 'PanelTopOpen';

export default PanelTopOpen;
