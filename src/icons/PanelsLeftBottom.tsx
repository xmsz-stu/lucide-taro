import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M9 3v18"}],["path",{"d":"M9 15h12"}]];

const PanelsLeftBottom = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelsLeftBottom.displayName = 'PanelsLeftBottom';

export default PanelsLeftBottom;
