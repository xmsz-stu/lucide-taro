import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M15 3v18"}],["path",{"d":"m8 9 3 3-3 3"}]];

const PanelRightClose = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelRightClose.displayName = 'PanelRightClose';

export default PanelRightClose;
