import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M3 15h12"}],["path",{"d":"M15 3v18"}]];

const PanelsRightBottom = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelsRightBottom.displayName = 'PanelsRightBottom';

export default PanelsRightBottom;
