import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 9h18"}],["path",{"d":"M9 21V9"}]];

const PanelsTopLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelsTopLeft.displayName = 'PanelsTopLeft';

export default PanelsTopLeft;
