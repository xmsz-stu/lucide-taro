import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 12h4"}],["path",{"d":"M10 17h4"}],["path",{"d":"M10 7h4"}],["path",{"d":"M18 12h2"}],["path",{"d":"M18 18h2"}],["path",{"d":"M18 6h2"}],["path",{"d":"M4 12h2"}],["path",{"d":"M4 18h2"}],["path",{"d":"M4 6h2"}],["rect",{"x":"6","y":"2","rx":"2"}]];

const Microchip = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Microchip.displayName = 'Microchip';

export default Microchip;
