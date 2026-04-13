import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M15 3v18"}],["path",{"d":"m10 15-3-3 3-3"}]];

const PanelRightOpen = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelRightOpen.displayName = 'PanelRightOpen';

export default PanelRightOpen;
