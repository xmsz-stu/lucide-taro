import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 8h10"}],["path",{"d":"M7 12h10"}],["path",{"d":"M7 16h10"}]];

const SquareMenu = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareMenu.displayName = 'SquareMenu';

export default SquareMenu;
