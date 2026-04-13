import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M9 3v18"}]];

const Sidebar = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
